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
    type: Date,
    default: Date.now() + 3 * 60 * 60 * 1000
  }
});

module.exports = mongoose.model("Comment", commentSchema);
