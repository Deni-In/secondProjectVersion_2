const { Router } = require("express");
const Post = require("../models/Post");
const router = Router();
const methods = require("../controllers/index");

router.get('/posts');

router.get('/posts/:id');

router.get('/categories/:id/posts');

router.post('/posts');

router.delete('/posts/:id');

router.patch('/posts/:id');
module.exports = router