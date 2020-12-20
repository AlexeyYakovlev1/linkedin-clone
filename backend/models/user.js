const {Schema, model} = require('mongoose');

const userSchema = new Schema({
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
    background: String,
    photo: String,
    posts: {
        items: [{
            count: {
                type: Number,
                required: true,
                default: 1
            }
        }]
    },
    company: {
        type: String,
        default: 'No industry'
    },
    city: {
        type: String,
        default: 'No city'
    },
    followers: {
        type: Number,
        default: 0
    }
});

module.exports = model('user', userSchema);