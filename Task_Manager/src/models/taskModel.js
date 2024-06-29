const mongoose = require("mongoose");
const TaskSchema= mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String,default:"New"},
    email:{type:String},

}, { versionKey: false });
const TaskModel = mongoose.model("tasks",TaskSchema);
module.exports = TaskModel;