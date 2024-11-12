const Product = require("../models/productsModel");
const errorHandler = require("../utils/errorHandler");

//Get Products  - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    sucess: true,
    products,
  });
};

// Create Product - /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
};

// Get the single Products - api/v1/products/:id
exports.GetSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    // return res.status(404).json({
    //   sucess: false,
    //   message: "Product not found",
    // });
    return next(new errorHandler("Product Not Found", 400));
  }
  res.status(201).json({
    sucess: true,
    product,
  });
};

//Update products - api/v1/products/:id
exports.updateProducts = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      sucess: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

exports.deleteProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      sucess: false,
      message: "Product not found",
    });
  }

  await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({
    sucess: true,
    message: "Product delete successfully",
  });
};
