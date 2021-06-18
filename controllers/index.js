const methodGetCategory = require("./category-controller/get-categories"); //Подключает папку category-controller и файл get-categories
const methodPostCategory = require("./category-controller/adding-category"); //Подключает папку category-controller и файл adding-category
const methodDeleteCategory = require("./category-controller/delete-category"); //Подключает папку category-controller и файл delete-category
const methodPatchCategory = require("./category-controller/unpdate-category"); //Подключает папку category-controller и файл unpdate-category

const methodGetPost = require("./post-controller/get-posts"); //Подключает папку post-controller и файл get-posts
const methodPostPost = require("./post-controller/adding-post"); //Подключает папку post-controller и файл adding-post
const methodDeletePost = require("./post-controller/delete-post"); //Подключает папку post-controller и файл delete-post
const methodPatchPost = require("./post-controller/update-post"); //Подключает папку post-controller и файл update-post

const methodGetComment = require("./comment-controller/get-comments"); //Подключает папку comment-controller и файл get-comments
const methodPostComment = require("./comment-controller/post-comment"); //Подключает папку comment-controller и файл post-comment
const methodDeleteComment = require("./comment-controller/delete-comment"); //Подключает папку comment-controller и файл delete-comment
const methodPatchComment = require("./comment-controller/update-comment"); //Подключает папку comment-controller и файл update-comment

module.exports = { //Экспортирует все методы
  methodGetCategory,
  methodPostCategory,
  methodDeleteCategory,
  methodPatchCategory,
  methodGetPost,
  methodPostPost,
  methodDeletePost,
  methodPatchPost,
  methodGetComment,
  methodPostComment,
  methodDeleteComment,
  methodPatchComment,
};
