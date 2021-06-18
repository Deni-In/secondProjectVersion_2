//подключаем модель к контроллеру
const Comment = require("../../models/Comment");

//объявляем функцию, делаем ее синхронной, передаем 2 параметра req, res
const deleteComment = async (req, res) => {

  //обработчик ошибок, если код далее не выполнится, то...
  try {
    //объявление константы, await подождет пока выполнится код, с помощью find ищем по id
    const comment = await Comment.findById(req.params.id);

    //найденный комментарий удаляем
    comment.delete();

    //передаем на сервер сообщение
    res.send("Комментарий удален");

  } catch (e) { //вывести ошибку в консоль
    console.log(e)
  }
};
//экспортируем функцию
module.exports = deleteComment;
