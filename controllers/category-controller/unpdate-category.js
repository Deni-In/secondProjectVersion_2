const Category = require("../../models/Category");

const updateCategory = async (req, res) => {
  try {
    const updateCategory = await Category.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json("Category changed");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = updateCategory;
