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
    return next(new ErrorHandler(`Order is not with id ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//Get all the order for the login user - /api/v1/oder/myorders

exports.myOrders = catchAsync(async (req, res, next) => {
  const orders = Order.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    orders,
  });
});

//////Hey it is totally alright to be confused. I am here to help you. I will explain the code to you.
