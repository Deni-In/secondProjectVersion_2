const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  txt: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  data: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Comment", commentSchema);
