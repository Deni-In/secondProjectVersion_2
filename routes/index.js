const { Router } = require("express"); //Подключает Router
const Category = require("./categories"); //Подключает файл categories
const Post = require("./posts"); //Подключает файл posts
const Comment = require("./comments"); //Подключает файл comments
const router = Router(); //Использует Router

router.use(Category); //Использует router из файла Category
router.use(Post); //Использует router из файла Post
router.use(Comment); //Использует router из файла Comment

module.exports = router; //Экспортирует метод router
