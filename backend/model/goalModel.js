const {Schema} = require("mongoose");
const mongoose = require("mongoose");


const goalSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)
