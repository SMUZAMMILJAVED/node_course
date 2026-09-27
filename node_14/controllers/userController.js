const { client } = require("../config/redis");
const User = require("../models/User")

const addUser=async(req,res)=>{
    try {
       const resp= await User.create(req.body)
       res.send(resp);
    } catch (error) {
        res.send(error)
    }
}
const getUsers=async(req,res)=>{
    try {
        const data =await client.get('user')
        if(data){

console.log('data from redis')
return res.send(JSON.parse(data))
        }
        const resp=await User.find()
      await  client.set('user',JSON.stringify(resp));
        console.log('data from mongodb')
        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}
module.exports={getUsers,addUser}