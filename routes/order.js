const express = require("express");
const router = express.Router();

const { newOrder } = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

router.post("/order/new", isAuthenticatedUser, newOrder);

module.exports = router;
