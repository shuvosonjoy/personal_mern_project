const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authVerify = require("../middleware/authVerifyMiddleWare");


router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/profileUpdate",authVerify, userController.profileUpdate);
router.post("/profileDetails",authVerify,userController.profileDetails);
router.post("/recoverEmail",authVerify,userController.recoverVerifyEmail);

module.exports = router;
