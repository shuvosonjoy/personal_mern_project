const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.post('/registration', userController.registration);
router.post('/login',userController.login);
router.post('/profileUpdate',userController.profileUpdate);

module.exports = router;
