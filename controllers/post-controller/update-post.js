const Post = require("../../models/Post");  // подключаем модель поста

const patchPost = async (req, res) => {   // создаем функцию изменения поста
  await Post.updateOne(   // меняем пост методом
    { _id: req.params.id },  // ищем пост по id из ссылки
    {
      $set: {
        ...req.body,  // берем данные из тела запроса
      },
    }
  );
  res.json("Post changed");  // вывод сообщения об изменения
};

module.exports = patchPost;  // экспортируем функцию
