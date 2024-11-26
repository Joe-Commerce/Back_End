const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },

  email: {
    type: String,
    required: [true, "Please enter the email"],
    unique: true,
    validate: [validator.isEmail, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
    maxlength: [6, "password cannot exceed 6 letters"],
  },
  avatar: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let model = mongoose.model("user", userSchema);

module.exports = model;
