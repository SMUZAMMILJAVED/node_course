const express =require('express');
const router = express.Router();
router.get('/',(req,res)=>{
res.send(
    "<form action='/form/submit' method='POST'><input name='data'/><button>submit</button></form>"
);
});
router.post('/submit',(req,res)=>{
   res.send("submitted!");
    })
module.exports= router;