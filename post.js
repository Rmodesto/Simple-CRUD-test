const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema(
    {

    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    comment: {
        type: String,
        required: [true, 'Please provide a comment']
    },


})

module.exports = mongoose.model('post', postSchema);