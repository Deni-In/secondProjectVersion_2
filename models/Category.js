const mongoose = require("mongoose"); // Подключение библиотеки mongoose

const categorySchema = new mongoose.Schema({ // Создание новой схемы
  // Все новые категории должны иметь ключи title и importance
  title: { // Ключ title для категории
    type: String, // Устанавливаем строковый тип для title
    required: true, // Свойство чтобы при добавление новой категории нельзя было пропускать ключ title
  },
  importance: { // Ключ importance для категории
    type: String, // Устанавливаем строковый тип для importance
    required: true, // Свойство чтобы при добавление новой категории нельзя было пропускать ключ importance
  },
});

module.exports = mongoose.model("Category", categorySchema); // Экспортирование модели Category
