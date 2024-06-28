const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authVerify = require("../middleware/authVerifyMiddleWare");


router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/profileUpdate",authVerify, userController.profileUpdate);
router.post("/profileDetails",authVerify,userController.profileDetails);
router.post("/recoverEmail/:email",authVerify,userController.recoverVerifyEmail);
router.post("/verifyOTP/:email/:otp",authVerify,userController.verifyOtp);
router.post("/resetPassword/:email/:otp/:password",authVerify,userController.resetPassword);

module.exports = router;
