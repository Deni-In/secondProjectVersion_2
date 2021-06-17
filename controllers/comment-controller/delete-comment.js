const Category = require("../../models/Category");

const deleteComment = async (req, res) => {
  const comment = await Comment.find({ _id: req.body.id });
  comment.delete();

  res.send("Комментарий удален");
};

module.exports = deleteComment;
