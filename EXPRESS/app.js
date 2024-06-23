const express = require('express');
const app = express();
const router = require('./src/routes/api');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const hpp = require('hpp')
const helmet = requier('helmet');
const sanitizerPlugin = require('mongoose-sanitizer')
const rateLimit = require('express-rate-limit')

const limiter=rateLimit({windowMs:15*60*1000,max:100})


app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(hpp());
app.use(sanitizerPlugin());
app.use(helmet());
app.use(limiter);


app.use('/api',router);


module.exports=app;f