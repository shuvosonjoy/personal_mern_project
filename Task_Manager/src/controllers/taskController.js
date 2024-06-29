const { body } = require("mongoose-express-sanitizer");
const TaskModel =require("../models/taskModel");


exports.createTask = async (req,res)=>{
try{
    let reqBody = req.body;
    reqBody.email = req.headers["email"];
    let result = await TaskModel.create(reqBody);

    res.status(200).json({

        status:"success",
        body:result
    });

}catch(e){
    res.status(200).json({
        status:"fail",
        data:e
    });
}
}


exports.updateTask = async (req,res)=>{
    try{
        let reqBody = req.body;
        let email = req.headers["email"];
        let taskName = req.params.name;
        let result = await TaskModel.updateOne({email:email,title:taskName},reqBody);

        res.status(200).json({
            status:"success",
            body:result
        
        });

    }catch(e){
        res.status(200).json({
            status:"fail",
            body:e
        })
    }
}
