const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    photo: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    },
    posts: [],
    company: String,
    city: String,
    followers: Number
});

module.exports = model('user', userSchema);