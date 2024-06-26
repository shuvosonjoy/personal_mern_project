const mongoose = require('mongoose');

const OtpShcema = mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type:Number,default:0}},{timestamps:true,version:false}
    
);
const otpModel = mongoose.model('otps',OtpShcema);

module.exports = otpModel;