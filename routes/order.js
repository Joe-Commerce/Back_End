const express = require("express");
const router = express.Router();

const { newOrder, getSingleOrder } = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

router.post("/order/new", isAuthenticatedUser, newOrder);
router.get("/order/id", isAuthenticatedUser, getSingleOrder);

module.exports = router;
