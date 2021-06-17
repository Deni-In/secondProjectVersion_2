const methodGet = require("./category-controller/get-categories");
const methodPost = require("./category-controller/adding-category");
const methodDelete = require("./category-controller/delete-category");
const methodPatch = require("./category-controller/update");

module.exports = { methodGet, methodPost, methodDelete, methodPatch };
