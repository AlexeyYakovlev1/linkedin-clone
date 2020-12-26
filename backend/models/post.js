const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    time: Date,
    text: {
        type: String,
    },
    link: String,
    img: String,
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