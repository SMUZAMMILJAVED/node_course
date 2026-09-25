const { sequelize } = require("./config/db");
const express=require('express')
const user=require('./routes/user');
const { dbConnect } = require('./config/db');
const User = require('./models/user');
const app=express();
dbConnect();
app.use(express.json());
app.use('/user',user)
sequelize.sync()
  .then(() => {
    console.log("Table created");
  });
app.listen(4000,()=>{
    console.log("server running at port 4000")
})