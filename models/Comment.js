//подключаем библиотеку mongoose
const mongoose = require("mongoose");

//создаем модель или схему
const commentSchema = new mongoose.Schema({
  txt: { //свойство txt, тип строка и свойство обязательное
    type: String,
    required: true,
  },
  writer: { //свойство writer, тип строка и свойство обязательное
    type: String,
    required: true,
  },
  postId: { //свойство postId, тип полученный Id поста
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  data: { //свойство data, тип дата, вызов метода Date.now и настройка даты по нужному часовому поясу
    type: Date,
    default: Date.now() + 3 * 60 * 60 * 1000,
  },
});

//экспортируем созданную модель
module.exports = mongoose.model("Comment", commentSchema);
