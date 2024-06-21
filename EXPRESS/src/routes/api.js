const express = require('express')
const router = express.Router();


const Democontroller = require('../controllers/DemoControllers');

router.get('/demo',Democontroller.demo)


module.exports=router;