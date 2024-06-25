const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    firstName: { type: String },
  },
  { versionKey: false }
);
const UsersModel = mongoose.model("auths", DataSchema);
module.exports = UsersModel;
