const { Router } = require("express");
const Category = require("../models/Category");
const router = Router();
const methods = require("../controllers/index");

router.get("/categories", methods.methodGet.getAllCategories);

router.get("/categories/:id", methods.methodGet.getCategoryById);

router.post("/categories", methods.methodPost);

router.delete("/categories/:id", methods.methodDelete);

router.patch("/categories/:id", methods.methodPatch);

module.exports = router;
