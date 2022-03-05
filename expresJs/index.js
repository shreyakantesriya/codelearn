const express = require("express");
const { Router, static } = require("express");
const path = require("path");
const app = express()
const hbs = require("hbs")
const port = 8000;
// console.log(path.join(__dirname,"./project"));
const stactipath = path.join(__dirname,'./public');

app.use(express.static(stactipath))

app.set('view engine','hbs')
hbs.registerPartials()
app.get("",(req,res)=>{
    res.render("index",{
        substion:"Lorem"
    })
})

app.get("/",(req,res)=>{
    res.send("Hello form the server");

})
app.listen(port,()=>{
    console.log(`listhin the ${port} no`);
})