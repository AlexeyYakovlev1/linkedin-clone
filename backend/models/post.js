const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    time: {
        type: Date,
        rel: new Date().setUTCDate
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    comments: {
        type: Number,
        required: true,
        default: 0
    },
    share: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = model('post', postSchema);