const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  changePassword,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require("../middlewares/authenticate");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/password/forgot", forgotPassword);
router.post("/password/reset/:token", resetPassword);
router.get("/myprofile", isAuthenticatedUser, getUserProfile);
router.put("/password/change", isAuthenticatedUser, changePassword);

module.exports = router;
