const updateCategory = async (req, res) => {
    const Category = require("../../models/Category");
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
