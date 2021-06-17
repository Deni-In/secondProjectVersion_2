const { Router } = require("express");
const Comment = require("../models/Comment");
const router = Router();
const methods = require("../controllers/index");

router.get('/posts/:id/comments', methods.methodGetComment);

router.post('/comments', methods.methodPostComment);

router.delete('/comments/:id', methods.methodDeleteComment);

router.patch('/comments/:id', methods.methodPatchComment);



module.exports = router;