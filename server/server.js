const express = require('express');
const connectDB=require('./config/db');
const app=express();

connectDB();

app.use(express.json({extended: true}));
const usersRoute=require('./routes/users');

app.use('/api/users',usersRoute);

const PORT=process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
});