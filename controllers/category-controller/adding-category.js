const Category = require("../../models/Category");

const addingCategory = async (req, res) => {
  try {
    const category = await new Category({
      title: req.body.title,
      importance: req.body.importance,
    });
    category.save();
    res.json(category);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = addingCategory;
