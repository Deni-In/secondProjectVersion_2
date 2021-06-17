const Post = require("../../models/Post");

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.delete();

  res.json("Post deleted");
};

module.exports = deletePost;
