const express=require('express');
const { getAllTodos, addTodo } = require('../controllers/todo');
const router=express.Router();
router.get('/',(req,res)=>{
    // res.send(getAllTodos());
    res.send({todos:getAllTodos()})
});
router.post('/add',(req,res)=>{
   addTodo(req.body.data);
   res.send("Todo Added!")
});
module.exports=router;