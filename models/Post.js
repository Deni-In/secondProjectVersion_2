const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  txt: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  data: {
    type: Date,
    default: Date.now() + 3*60*60*1000
  }
});

module.exports = mongoose.model("Post", postSchema);
