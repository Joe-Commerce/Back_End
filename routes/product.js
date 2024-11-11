const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  GetSingleProduct,
  updateProducts,
} = require("../controllers/productController");

router.get("/products", getProducts);

router.get("/products/:id", GetSingleProduct);

router.post("/product/new", newProduct);

router.put("/products/:id", updateProducts);

module.exports = router;
