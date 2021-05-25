const express = require('express');
const connectDB=require('./config/db');
const cors=require('cors');
const app=express();

app.use(cors());

connectDB();

app.use(express.json({extended: true}));

const booksRoute=require('./routes/books');

app.use('/api/books',booksRoute);

const PORT=process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
});