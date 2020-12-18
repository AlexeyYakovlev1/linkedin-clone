const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        required: true,
        type: String
    },
    password: String,
    posts: []
});

module.exports = model('user', userSchema);