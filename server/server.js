const express = require('express');
const connectDB=require('./config/db');
const app=express();

connectDB();

app.use(express.json({extended: true}));

const usersRoute=require('./routes/users');
const booksRoute=require('./routes/books');

app.use('/api/users',usersRoute);
app.use('/api/books',booksRoute);

const PORT=process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
});