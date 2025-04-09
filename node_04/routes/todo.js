const express =require('express');
const { addTodo, getAllTodos } = require('../controllers/todo');
const router = express.Router();
router.post('/add',(req,res)=>{
addTodo(req.body.data);
res.send("todo Added!");
})
router.get('/',(req,res)=>{
res.render("todo",{todos:getAllTodos()});
})
module.exports= router;