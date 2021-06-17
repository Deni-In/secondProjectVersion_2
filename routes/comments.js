const { Router } = require("express");
const Comment = require("../models/Comment");
const router = Router();
const methods = require("../controllers/index");

router.get('/posts/:id/comments');

router.post('/comments');

router.delete('/comments/:id');

router.patch('/comments/:id');

module.exports = router;