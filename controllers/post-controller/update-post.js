const Post = require('/models/Post');

const patchPost = async (req, res) => {
    await Post.updateOne({'_id': req.params.id}, {
        $set: {
            ...req.body
        }
    })

    res.json('Post changed')
}

module.exports = patchPost