const Post = require("../../models/Post");

const addPost = async (req, res) => {
  try {
    const post = await new Post({
      title: req.body.title,
      txt: req.body.txt,
      categoryId: req.body.categoryId,
    });
    post.save()
    res.json("Post added");
  } catch (e) {
    console.log(e.message)
  }
};

module.exports = addPost;
