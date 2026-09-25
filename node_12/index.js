const express = require('express');
const app = express();
app.use((req, res) => { 
    res.send('hello world from dokcer') 
})
app.listen(4000, () => {
    console.log("server is runnig at port 4000")
})