const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authVerify = require("../middleware/authVerifyMiddleWare");
const taskController = require("../controllers/taskController");


router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/profileUpdate",authVerify, userController.profileUpdate);
router.post("/profileDetails",authVerify,userController.profileDetails);
router.get("/recoverEmail/:email",authVerify,userController.recoverVerifyEmail);
router.get("/verifyOTP/:email/:otp",authVerify,userController.verifyOtp);
router.post("/resetPassword/:otp",authVerify,userController.resetPassword);


router.post("/createTask",authVerify, taskController.createTask);

module.exports = router;
