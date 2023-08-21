
const mongoose = require('mongoose');

// creating schema for this 

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

// creating model for this 

const UserModel = mongoose.model('credentials', userSchema)

module.exports = {
    UserModel
}