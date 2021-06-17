const Comment = require("../../models/Comment");

const deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  comment.delete();

  res.send("Комментарий удален");
};

module.exports = deleteComment;