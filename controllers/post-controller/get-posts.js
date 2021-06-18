const Post = require("../../models/Post");  // подключаем модель поста

const getAllPosts = async (req, res) => {  // создаем функцию вывода всех постов
  const list = await Post.find();  // ищем посты по модели

  res.json(list);  // выводим посты
};

const getPostById = async (req, res) => {   // создаем функцию вывода поста по id
  const item = await Post.findById(req.params.id);  // ищем пост по id

  res.json(item);  // выводим найденный пост
};

const getPostsFromCategory = async (req, res) => {   // создаем функцию вывода постов по категории
  const postsFromCategory = await Post.find({  // ищем пост
    category: req.params.categoryId,    // по категории из ссылки запроса
  });
  res.json(postsFromCategory);  // вывод постов из категории
};

module.exports = {  // экспортируем все функции
  getAllPosts,
  getPostById,
  getPostsFromCategory,
};
