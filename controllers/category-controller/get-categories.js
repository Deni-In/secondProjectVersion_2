const getAllCategories = async (req, res) => {
    const Category = require("../../models/Category");
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (e) {
        console.log(e.message);
    }
};

const getCategoryById = async (req, res) => {
    const Category = require("../../models/Category");
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = { getAllCategories, getCategoryById };
