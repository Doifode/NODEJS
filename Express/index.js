const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hii its working")
    
})
app.get('/about',(req,res)=>{
    res.send("hii its about")
    
})
app.listen(2304,()=>{
    console.log('hiiii')
})