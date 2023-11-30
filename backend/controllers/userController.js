const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler (async (req, res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSaltSync(Number(process.env.SALT))
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler (async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compareSync(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getMe = asyncHandler (async ( req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.json({
        id: _id,
        name,
        email
    })
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_KEY, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}
