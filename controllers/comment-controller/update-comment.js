const Category = require("../../models/Comment");

const patchComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { _id: req.body.id },
      {
        $set: {
          ...req.body,
        },
      }
    );
    res.send("Комментарий изменен");
  } catch (e) {
    console.log(e);
  }
};

module.exports = patchComment;
