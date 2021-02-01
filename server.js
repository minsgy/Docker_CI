const express = require("express");
const PORT = 8080;

const app = express();
app.get('/', (req,res)=>{
    res.send('asdfasdf');
})

app.listen(PORT);
console.log("SERVER ON")