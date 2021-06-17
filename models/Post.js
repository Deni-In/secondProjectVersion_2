const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    txt: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    }
})

module.exports =  mongoose.model('Post', postSchema)