const { Router } = require("express");
const Post = require("../models/Post");
const router = Router();
const methods = require("../controllers/index");

router.get("/posts", methods.methodGetPost.getAllPosts);

router.get("/posts/:id", methods.methodGetPost.getPostById);

router.get("/categories/:id/posts", methods.methodGetPost.getPostsFromCategory);

router.post("/posts", methods.methodPostPost);

router.delete("/posts/:id", methods.methodDeletePost);

router.patch("/posts/:id", methods.methodPatchPost);

module.exports = router;
