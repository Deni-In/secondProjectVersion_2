//подключаем Router из express
const { Router } = require("express");

//принимаем модель
const Comment = require("../models/Comment");

//вызываем Router
const router = Router();

//подключаем контроллеры
const methods = require("../controllers/index");

//get-запрос по id поста к его комментариям
router.get("/posts/:id/comments", methods.methodGetComment);

//post-запрос на комментарии
router.post("/comments", methods.methodPostComment);

//delete-запрос по id комментарию
router.delete("/comments/:id", methods.methodDeleteComment);

//patch-запрос по id комментарию
router.patch("/comments/:id", methods.methodPatchComment);

//экспортируем роутеры
module.exports = router;
