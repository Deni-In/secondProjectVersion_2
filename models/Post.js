const mongoose = require("mongoose");   // подключаем монгус
const postSchema = new mongoose.Schema({  // создаем схему модели
  title: {  // название строкой и обязательно
    type: String,
    required: true,
  },
  txt: {  // текст строкой и обязательно
    type: String,
    required: true,
  },
  categoryId: {  // категория id конкретной категории
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  data: { // дата поста ставится методом
    type: Date,
    default: Date.now() + 3 * 60 * 60 * 1000,
  },
});

module.exports = mongoose.model("Post", postSchema);  // экспортируем модель