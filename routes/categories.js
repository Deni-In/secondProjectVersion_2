const { Router } = require("express");
const Category = require("../models/Category");
const router = Router();
const methods = require("../controllers/index");

router.get("/categories", methods.methodGetCategory.getAllCategories);

router.get("/categories/:id", methods.methodGetCategory.getCategoryById);

router.post("/categories", methods.methodPostCategory);

router.delete("/categories/:id", methods.methodDeleteCategory);

router.patch("/categories/:id", methods.methodPatchCategory);

module.exports = router;
