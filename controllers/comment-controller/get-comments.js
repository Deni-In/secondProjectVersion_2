const Category = require("../../models/Comment");

const getAllComment = async (req, res) => {
  try {
    const comment = await Comment.find({});
    res.json(comment);
  } catch (e) {
    console.log(e);
  }
};

const getCommentId = async (req, res) => {
  try {
    const comment = await Comment.find({ _id: req.body.id });
    res.json(comment);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllComment, getCommentId };
