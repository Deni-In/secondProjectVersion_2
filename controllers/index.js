const methodGetCategory = require("./category-controller/get-categories");
const methodPostCategory = require("./category-controller/adding-category");
const methodDeleteCategory = require("./category-controller/delete-category");
const methodPatchCategory = require("./category-controller/unpdate-category");

const methodGetPost = require("./post-controller/get.posts");
const methodPostPost = require("./post-controller/adding-post");
const methodDeletePost = require("./post-controller/delete-post");
const methodPatchPost = require("./post-controller/update-post");

const methodGetComment = require("./comment-controller/get-comments");
const methodPostComment = require("./comment-controller/post-comment");
const methodDeleteComment = require("./comment-controller/delete-comment");
const methodPatchComment = require("./comment-controller/update-comment");

module.exports = {
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
