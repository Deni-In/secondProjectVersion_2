const Post = require("../../models/Post");  // подключаем модель поста

const addPost = async (req, res) => {   // пишем функцию добавления поста
  try {
    const post = await new Post({  // создаем переменную нового поста
      title: req.body.title,  // название добавляем из тела запроса
      txt: req.body.txt,   // текст из тела запроса
      categoryId: req.body.categoryId,   // категория из тела запроса
    });
    post.save();   // сохраняем пост
    res.json("Post added");   // вывод сообщения о добавке поста
  } catch (e) {  // вылавливаем ошибку
    console.log(e.message);  // вывод ошибки в консоль
  }
};

module.exports = addPost;  // экспортируем функцию
