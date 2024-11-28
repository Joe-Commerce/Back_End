const catchAsync = require("../middlewares/catchAsyncError");
const User = require("../models/userModels");

// Create the user Data
exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password, avatar } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  const tokens = user.getJwtToken();

  res.status(201).json({
    success: true,
    user,
    tokens,
  });
});
