
// const { Router } = require("express");
const { Router, static } = require("express");
const express = require("express");
const path = require("path")
const app = express();
// const port = 8000;

// console.log(path.join(__dirname, '../project'));

// const staticPath = path.join(__dirname, '../project');
// app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    res.send("hello form the server");

});
app.listen(8000,()=>{
    console.log("listing the port 8000");
})