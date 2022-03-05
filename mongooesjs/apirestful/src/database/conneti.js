const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/employeeApi",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connetion is successful");
}).catch((err)=>{
    console.log("connection is failled");
})