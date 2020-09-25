const mongoose = require('mongoose');

//Schema for Users collection
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Users2',userSchema)