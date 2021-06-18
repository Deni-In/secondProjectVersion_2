const Category = require("../../models/Category"); // Подключение модели категории.

const addingCategory = async (req, res) => { // Функция для добавления новой категории.
  try { // Если в коде нету ошибок то выполнится try(попытка)
    const category = await new Category({ // Константа для создания новой категории
      title: req.body.title, // Для ключа title присваиваем значение title из запроса
      importance: req.body.importance, // Для ключа importance присваиваем значение importance из запроса
    });
    category.save(); // Сохранение категории
    res.json(category); // Вывод категории в формате json
  } catch (e) { // Если в коде есть ошибка catch перехватывает её
    console.log(e.message); // В консоль выводиться сообшение об ошибке
  }
};

module.exports = addingCategory; // Экспортирование функции addingCategory
