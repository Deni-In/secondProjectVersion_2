const Comment = require("../../models/Comment");

const addComment = async (req, res) => {
  try {
    const comment = await new Comment({
      txt: req.body.txt,
      writer: req.body.writer,
      postId: req.body.postId,
      data: req.body.data
    });
    comment.save();
    res.json("Comment added");
  } catch (e) {
    console.log(e);
  }
};

module.exports = addComment;
