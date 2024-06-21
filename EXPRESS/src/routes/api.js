const express = require('express')
const router = express.Router();


const Democontroller = require('../controllers/DemoControllers');

router.get('/demo/:name/:age',Democontroller.demo)
router.post('/demo1',Democontroller.demo1)
router.delete('/demo2',Democontroller.demo2)



module.exports=router;