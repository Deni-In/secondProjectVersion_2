const { Router } = require("express");  // подключаем роутер
const Post = require("../models/Post");  // подключаем модель поста
const router = Router();  // создаем роутер
const methods = require("../controllers/index"); // подключаем контроллеры

router.get("/posts", methods.methodGetPost.getAllPosts);  // подключаем метод вывода постов

router.get("/posts/:id", methods.methodGetPost.getPostById); // подключаем метод вывода поста по id

router.get("/categories/:id/posts", methods.methodGetPost.getPostsFromCategory); // подкючаем метод вывода постов по категории

router.post("/posts", methods.methodPostPost); // подключаем метод публикации поста

router.delete("/posts/:id", methods.methodDeletePost);  // подключаем метод удаления поста

router.patch("/posts/:id", methods.methodPatchPost);  // подключаем метод изменения поста

module.exports = router;  // экспортируем роутер