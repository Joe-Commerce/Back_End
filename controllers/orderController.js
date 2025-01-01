const catchAsync = require("../middlewares/catchAsyncError");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");

//Create new order - api/v1/order/new
exports.newOrder = catchAsync(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paidAt: Date.now(),
    user: req.user.id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

//Get single order - api/v1/order/:id
exports.getSingleOrder = catchAsync(async (req, res, next) => {
  const order = Order.findById(req.params.Date).populate("user", "name email");
  if (!order) {
    return next(new ErrorHandler("Order is not with id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});
