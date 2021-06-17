const Comment = require("../../models/Comment");

const patchComment = async (req, res) => {
  try {
    await Comment.updateOne(
      { _id: req.body.id },
      {
        $set: {
          ...req.body,
        },
      }
    )
    res.json("Комментарий изменен");
  } catch (e) {
    console.log(e);
  }
};

module.exports = patchComment;
