const express = require('express');
const router = require('./src/routes/api');
const cookieParser = require('cookie-parser');
const app = express();
require('./src/routes/api')


app.use(cookieParser());
app.use(express.json());
app.use('/api',router);



module.exports=app;