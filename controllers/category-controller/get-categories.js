const Category = require("../../models/Category"); // Подключение модели категории.

const getAllCategories = async (req, res) => { // Функция для получения категорий.
  try { // Если в коде нету ошибок то выполнится try(попытка)
    const categories = await Category.find(); // Константа для нахождения категорий
    res.json(categories); // Вывод категорий в формате json
  } catch (e) { // Если в коде есть ошибка catch перехватывает её
    console.log(e.message); // В консоль выводиться сообшение об ошибке
  }
};

const getCategoryById = async (req, res) => { // Функция для получения категория по id.
  try { // Если в коде нету ошибок то выполнится try(попытка)
    const category = await Category.findById(req.params.id); // Константа для нахождения категория по id
    res.json(category); // Вывод категория в формате json
  } catch (e) { // Если в коде есть ошибка catch перехватывает её
    console.log(e.message); // В консоль выводиться сообшение об ошибке
  }
};

module.exports = { getAllCategories, getCategoryById }; // Экспортирование функций getAllCategories и getCategoryById
