const Category = require("../../models/Category"); // Подключение модели категории.

const updateCategory = async (req, res) => { // Функция для изменения категории.
  try { // Если в коде нету ошибок то выполнится try(попытка)
    const updateCategory = await Category.updateOne( // Константа для изменения категории
      { _id: req.params.id }, // В метод updateOne передаем id из запроса
      { $set: { ...req.body } } // И с помощю set раскрываем json переданный в req.body
    );
    res.json("Category changed"); // Выводим в фомате json сообщение про изменение категории
  } catch (e) { // Если в коде есть ошибка catch перехватывает её
    console.log(e.message); // В консоль выводиться сообшение об ошибке
  }
};

module.exports = updateCategory; // Экспортирование функцию updateCategory
