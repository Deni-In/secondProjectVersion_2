const { Router } = require("express"); // Подключение роутера
const Category = require("../models/Category"); // Подключение модели категории
const router = Router(); // Использование роутера
const methods = require("../controllers/index"); // Подключение роутеров из controllers/index

router.get("/categories", methods.methodGetCategory.getAllCategories); // Get запрос на вывод всех категорий

router.get("/categories/:id", methods.methodGetCategory.getCategoryById); // Get запрос на вывод категории по id

router.post("/categories", methods.methodPostCategory); // Post запрос на добавление новой категории

router.delete("/categories/:id", methods.methodDeleteCategory); // Delete запрос на удаление категории по id

router.patch("/categories/:id", methods.methodPatchCategory); // Patch запрос на изменение категории по id

module.exports = router; // Экспортирование роутера
