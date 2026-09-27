const express=require('express')
const dotenv=require('dotenv')
const user=require('./routes/user')
const dbConnect = require('./config/db')
const { redisConnect } = require('./config/redis')
const app=express()
dotenv.config();
dbConnect();
redisConnect()
app.use(express.json())
app.use('/user',user)
app.listen(4000,()=>{
    console.log('server is running at 4000')
})