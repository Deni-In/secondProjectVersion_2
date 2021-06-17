const Post = require('/models/Post');

const getAllPosts = async (req, res) => {
    const list = await Post.find();

    res.json(list)
}

const getPostById = async (req, res) => {
    const item = await Post.findById(req.params.id)

    res.json(item)
}

const getPostsFromCategory = async (req, res) => {
    const postsFromCategory = await Post.find({
        category: req.params.id
    })
    res.json(postsFromCategory)
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostsFromCategory
}