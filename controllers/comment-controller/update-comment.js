const Comment = require("../../models/Comment");

const patchComment = async (req, res) => {
  await Comment.updateOne(
    { _id: req.params.id },
    {
      $set: {
        ...req.body,
      },
    }
  )
  res.json("Комментарий изменен");

};

module.exports = patchComment;
