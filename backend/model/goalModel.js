const {Schema} = require("mongoose");
const mongoose = require("mongoose");


const goalSchema = Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)
