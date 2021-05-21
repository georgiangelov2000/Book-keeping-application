const express = require('express');
const dotenv=require('dotenv');
const connectDatabase=require('./config/db');
const app=express();

dotenv.config({path:'./config/config.env'})
connectDatabase();

const PORT=process.env.PORT ||5000

app.listen(PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
});