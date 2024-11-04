const Product = require("../models/productsModel");

// exports.getProducts = (req, res, next) => {
//   res.status(200).json({
//     sucess: true,
//     message: "This will show all the product in database",
//   });
// };

// Create Product - /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
};
