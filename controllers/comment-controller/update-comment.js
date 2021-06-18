//подключаем модель к контроллеру
const Comment = require("../../models/Comment");

//объявляем функцию, делаем ее синхронной, передаем 2 параметра req, res
const patchComment = async (req, res) => {

  //обработчик ошибок, если код далее не выполнится, то...
  try {
    //await подождет пока выполнится код, с помощью updateOne ...
    await Comment.updateOne(

      //ищем нужный комментарий
      { _id: req.params.id },
      {
        $set: { //изменить комментарий как передано в тело
          ...req.body,
        },
      }
    );
    //передаем на сервер сообщение
    res.json("Комментарий изменен");

  } catch (e) {     //вывести ошибку в консоль
    console.log(e)
  }
};
//экспортируем функцию
module.exports = patchComment;
