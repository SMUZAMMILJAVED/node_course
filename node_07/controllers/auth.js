const { createUser, findUser } = require("../models/user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../data/key");
exports.createUser=async(email,password)=>{
    try{
        await createUser(email,password);

    }catch(err){
        throw err;
    }
   
}
exports.login=async(email,password)=>{
    try{
      const user=  await findUser(email);
      const result= await bcrypt.compare(password,!!user && user.password);
      if(result){
        var token = jwt.sign({ email }, SECRET_KEY);
        return {token}
      }
    return "Invalid Email and Password!"
    }catch(err){
        throw err;
    }
   
}