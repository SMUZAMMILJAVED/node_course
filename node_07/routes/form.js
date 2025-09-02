const express=require('express');
const path=require('path');
const router=express.Router();
router.get('/',(req,res)=>{
//     res.send(
//   `
//     <form action='/form/submit' method='POST'>
//     <input name='data'>
//     <input type='submit' value='submit'>
//     </form>
//     `
//     )
// res.sendFile(path.join(process.cwd(),'views','form.html'));
res.render("form",{user:req.query.name||"muzammil"})
}
)
router.post('/submit',(req,res)=>{
    res.send(req.body);
}
)
module.exports=router;