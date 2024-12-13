const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  GetSingleProduct,
  updateProducts,
  deleteProduct,
} = require("../controllers/productController");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");

router.get("/products", isAuthenticatedUser, getProducts);

router.get("/products/:id", GetSingleProduct);

router.put("/products/:id", updateProducts);

router.delete("/products/:id", deleteProduct);

//Admin Routes
router.post(
  "/admin/product/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  newProduct
);

module.exports = router;
