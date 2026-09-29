const express =require('express')
const app=express()


app.use((req,res)=>{
   res.send( 'ci cd testing')
})
// test for break
app.listen(4000,()=>{
    console.log('server running at 4000')
})