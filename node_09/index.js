const express=require('express');
const dotenv=require('dotenv');
const product=require('./routes/product');
const mongoConnect=require("./config/db")
const app=express();
dotenv.config()
const port =process.env.PORT||5000
mongoConnect();
app.use(express.json())
app.use("/uploads",express.static('uploads'))
app.use(express.urlencoded({extended:false}))
app.use('/product',product)
app.listen(port,()=>{
    console.log("server running at port ",port)
})