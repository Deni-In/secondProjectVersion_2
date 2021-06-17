const { Router } = require("express");
const Category = require("./categories");
const Post = require("./posts");
const Comment = require("./comments");
const router = Router();

router.use(Category);
router.use(Post);
router.use(Comment);

module.exports = router;
