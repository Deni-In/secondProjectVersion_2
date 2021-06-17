const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({

    txt: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        requred: true
    },
    post: {
        type: String,
        requred: true
    }

})


module.exports = mongoose.model('Comment', commentSchema)