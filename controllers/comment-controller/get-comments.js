const Comment = require("../../models/Comment");

const getCommentId = async (req, res) => {
  try {
    const comment = await Comment.find({ postId: req.params.id });

    res.json(comment);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getCommentId;
