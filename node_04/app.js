const express=require('express');
const form=require('./routes/form');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
app.use((req,res,next)=>{{
    req.data ='ishaq';
    console.log(req.url);
    next(); 
}});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(),'public')))
// app.use((req,res,next)=>{
//    res.send(req.data);
// })
app.use('/form',form);
app.listen(3000);

