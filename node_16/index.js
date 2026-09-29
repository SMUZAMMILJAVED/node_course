const express =require('express')
const dotenv=require('dotenv')
dotenv.config()
const payment=require('./routes/payment')
const app=express()


app.use(express.urlencoded())
app.use('/payment',payment)
app.listen(4000,()=>{
    console.log('server running at 4000')
})