const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  GetSingleProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);

router.get("/products/:id", GetSingleProduct);

router.post("/product/new", newProduct);

module.exports = router;
