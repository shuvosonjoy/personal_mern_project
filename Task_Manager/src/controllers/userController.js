const UserModel = require("../models/usermodels");
const jwt = require("jsonwebtoken");

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
      res.status(200).json({
        status: "success",
        data: token,
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


exports.profileUpdate=async(req,res)=>{

    try{
        let email = req.body['email'];
        let reqBody = req.body;
    
          let result=   await UserModel.updateOne(
                {email:email},reqBody
            );
            res.status(200).json({
                status: "succed",
                data: result,
              });
        


    }catch(e){
        res.status(200).json({ status: "fail", data: e });

    }

}