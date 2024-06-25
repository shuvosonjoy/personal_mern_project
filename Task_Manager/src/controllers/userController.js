const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');

exports.registration = async (req, res) => {
    let reqBody = req.body;
    try {
        let result = await UserModel.create(reqBody);
        res.status(200).json({ status: "success", data: result });
    } catch (e) {
        res.status(200).json({ status: "fail", data:e });
    }
};
