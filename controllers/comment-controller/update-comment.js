const Comment = require("../../models/Comment");

const patchComment = async (req, res) => {
  try {
    const comment = await Comment.updateOne(
      { _id: req.body.id },

      {
        $set: {
          ...req.body,
        },
      }
    );
    res.json("Комментарий изменен");
  } catch (e) {
    console.log(e);
  }
  await Comment.updateOne(
    { _id: req.params.id },
    {
      $set: {
        ...req.body,
      },
    }
  );
  res.json("Комментарий изменен");
};

module.exports = patchComment;
