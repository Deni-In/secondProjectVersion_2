const Category = require("../../models/Category");

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    category.delete();
    res.json("Category deleted");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = deleteCategory;
