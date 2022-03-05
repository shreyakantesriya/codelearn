
// API
// get-read
// post- create new data
// put- update data
// delete -delete


// the cllback function has 2 parameter request(req) and response(res).
// the request object (req) represents the http request and has properties for the request query string parameter body http headers,etc

// similarly the respons object represnts the http respons
// that the express app sends when it receives an http reuest.
const path = require("path")
const { Router, static } = require("express");
const express = require("express");
const app = express();
console.log(__dirname);
const  staticPath = (path.join(__dirname,'./public1'));
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("hello form the cool websites");

});
app.listen(8000,()=>{
    console.log("listing the port 8000");
})