const { body } = require("mongoose-express-sanitizer");
const UserModel = require("../models/usermodels");
const jwt = require("jsonwebtoken");
const SendEmailUtility = require("../utility/sendEmailUtility");
const otpModel = require("../models/otpModel");


exports.registration = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await UserModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};


exports.login = async (req, res) => {
  try {
    let reqBody = req.body;
    let result = await UserModel.find(reqBody).count();

    if (result === 1) {
      let payload = {
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        data: reqBody["email"],
      };
      let token = jwt.sign(payload, "abcdef");
      console.log(token);

      res.status(200).json({
        status: "success",
        data: reqBody,
        token: token,
      });
    } else {
      res.status(200).json({
        status: "failed",
        data: "data not found",
      });
    }
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};


exports.profileUpdate = async (req, res) => {
  try {
    let email = req.headers["email"];
    let reqBody = req.body;

    let result = await UserModel.updateOne({ email: email }, reqBody);
    res.status(200).json({
      status: "update done!",
      data: result,
    });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};


exports.profileDetails = async (req, res) => {
  try {
    let email = req.headers["email"];
    let result = await UserModel.find({ email: email });

    res.status(200).json({
      status: "success",
      body: result,
    });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};


exports.recoverVerifyEmail = async (req,res) => {
  try {
    let email = req.params.email;
    console.log(email);
    let result = await UserModel.find({ email: email }).count();
    let otp = Math.floor(100000 +Math.random()*900000);
    let emailText = "Your OTP is: "+otp;
    let emailSubject = "Task Manager Otp code";
  

    if (result === 1) {
      console.log("enterd");
      await SendEmailUtility(email,emailText,emailSubject);
      await otpModel.create({email:email,otp:otp});
      res.status(200).json({
        status:"success",
        data:"otp sent"
      });
    } else {
    }
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};
