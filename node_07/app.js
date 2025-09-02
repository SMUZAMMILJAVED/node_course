const express=require('express');
const path=require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const form=require('./routes/form');
const todo=require('./routes/todo');
const auth=require('./routes/auth');
const product=require('./routes/product');
const { verify } = require('./middlewares/auth');
const app=express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(),'public')));
app.set("view engine","ejs");
app.set("views","views")
app.use((req,res,next)=>{
console.log(req.url);
next();
})
app.use('/form',form);
app.use('/auth',auth);
app.use('/todo',verify,todo);
app.use('/products',product);
app.listen(4000)
