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
  updateProfile,
  getAllUsers,
} = require("../controllers/authController");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/password/forgot", forgotPassword);
router.post("/password/reset/:token", resetPassword);
router.get("/myprofile", isAuthenticatedUser, getUserProfile);
router.put("/password/change", isAuthenticatedUser, changePassword);
router.put("/update", isAuthenticatedUser, updateProfile);

//Admin Routes
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUsers
);
module.exports = router;
