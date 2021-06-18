//подключаем модель к контроллеру
const Comment = require("../../models/Comment");

//объявляем функцию, делаем ее синхронной, передаем 2 параметра req, res
const addComment = async (req, res) => {
  //обработчик ошибок, если код далее не выполнится, то...
  try {
    //объявление константы, await подождет пока выполнится код, делаем новый комментарий
    const comment = await new Comment({
      txt: req.body.txt, //для txt присваиваем данные txt
      writer: req.body.writer, //для writer присваиваем данные writer
      postId: req.body.postId, //для postId присваиваем данные postId
      data: req.body.data, //для data присваиваем данные data
    });
    //сохранение полученных данных
    comment.save();
    //передаем сообщение Comment added
    res.json("Comment added");

  } catch (e) { //вывести ошибку в консоль
    console.log(e);
  }
};

//экспортируем функцию
module.exports = addComment;
