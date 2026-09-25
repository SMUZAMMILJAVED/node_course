const User = require("../models/user")

const getUsers=async(req,res)=>{
    try {
        const resp=await User.findAll()
        res.json(resp)
    } catch (error) {
        console.log(error)
    }
}
const addUser=async(req,res)=>{
    try {
       const resp= await User.create(req.body)

    res.json(resp)
    } catch (error) {

        console.log(error)
    }
}
const updateUser=async(req,res)=>{
    try {
         const resp=await User.update(req.body,{
            where:{
                id:req.params.id
            }
         })
        res.json(resp)
    } catch (error) {
        console.log(error)
    }
}
const deleteUser=async(req,res)=>{
    try {
         const resp=await User.destroy({
            where:{
                id:req.params.id
            }
         })
        res.json(resp)
    } catch (error) {
        console.log(error)
    }
}
const getUser=async(req,res)=>{
    try {
         const resp=await User.findByPk(req.params.id)
        res.json(resp)
    } catch (error) {
        console.log(error)
    }
}
module.exports={getUser,getUsers,addUser,deleteUser,updateUser}