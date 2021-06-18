//подключаем модель к контроллеру
const Comment = require("../../models/Comment");

//объявляем функцию, делаем ее синхронной, передаем 2 параметра req, res
const getCommentId = async (req, res) => {

  //обработчик ошибок, если код далее не выполнится, то...
  try {
    //объявление константы, await подождет пока выполнится код, с помощью find ищем по id
    const comment = await Comment.find({ postId: req.params.id });

    //передаем на сервер полученный комментарий
    res.json(comment);
  } catch (e) { //вывести ошибку в консоль
    console.log(e);
  }
};

//экспортируем функцию
module.exports = getCommentId;
