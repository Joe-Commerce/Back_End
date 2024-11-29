const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  GetSingleProduct,
  updateProducts,
  deleteProduct,
} = require("../controllers/productController");

const { isAuthenticatedUser } = require("../middlewares/authenticate");

router.get("/products", isAuthenticatedUser, getProducts);

router.get("/products/:id", GetSingleProduct);

router.post("/product/new", newProduct);

router.put("/products/:id", updateProducts);

router.delete("/products/:id", deleteProduct);

module.exports = router;
