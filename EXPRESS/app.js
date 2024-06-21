const express = require('express');
const router = require('./src/routes/api');
const app = express();
require('./src/routes/api')


app.use('/api',router);


module.exports=app;