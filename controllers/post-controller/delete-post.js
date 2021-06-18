const Post = require("../../models/Post");   // подключаем модель поста

const deletePost = async (req, res) => {  // создаем функцию удаления поста
  const post = await Post.findById(req.params.id);  // ищем пост по ID
  post.delete(); // удаляем пост
  res.json("Post deleted");   // выводим сообщение об удалении
};

module.exports = deletePost;  // экспортируем функцию
