const Post = require('/models/Post');

const addPost = async (req, res) => {
    await new Post({
        title: req.body.title,
        txt: req.body.txt,
        category: req.body.category
    })

    res.json('Post added')
}

module.exports = addPost