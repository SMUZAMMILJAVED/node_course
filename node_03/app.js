const express=require('express');
const form=require('./routes/form');
const app=express();
app.use((req,res,next)=>{{
    req.data ='ishaq';
    console.log(req.url);
    next(); 
}});
// app.use((req,res,next)=>{
//    res.send(req.data);
// })
app.use('/form',form);
app.listen(3000);

