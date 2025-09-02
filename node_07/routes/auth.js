const express=require('express');
const { createUser,login } = require('../controllers/auth');
const router=express.Router();

router.post('/signup',async(req,res)=>{
    try{
        await createUser(req.body.email,req.body.password);
        res.send("user created!")
    }catch(err){
res.send(err);
    }
   
});
router.post('/login',async(req,res)=>{
    try{
      const response=  await login(req.body.email,req.body.password);
        res.send(response);
    }catch(err){
res.send(err);
    }
   
});
module.exports=router;