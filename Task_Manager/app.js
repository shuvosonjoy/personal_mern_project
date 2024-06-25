const express = require('express')
const mongoose = require('mongoose'); 
const app = express();
const router = require('./src/routes/api');

app.use(express.json());

app.use('/api',router);


mongoose.connect("mongodb+srv://shuvosdg123:shuvosd123@cluster0.eycxd1c.mongodb.net/")
.then(()=>console.log('Database connected successfully!'))
.catch((error)=>{
    console.log('Failed to connect with database');
    console.log(error);
    process.exit(1);
})
module.exports = app;