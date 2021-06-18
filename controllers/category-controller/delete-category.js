const Category = require("../../models/Category"); // Подключение модели категории.

const deleteCategory = async (req, res) => { // Функция для удаления категории.
  try { // Если в коде нету ошибок то выполнится try(попытка)
    const category = await Category.findById(req.params.id); // Константа для нахождения категории по id
    category.delete(); // Удаление категории
    res.json("Category deleted"); // Вывод сообщения что категории удалена
  } catch (e) { // Если в коде есть ошибка catch перехватывает её
    console.log(e.message); // В консоль выводиться сообшение об ошибке
  }
};

module.exports = deleteCategory; // Экспортирование функции deleteCategory
