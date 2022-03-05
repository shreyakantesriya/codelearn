const express = require("express");
const Employe = require("./modules/employee");
require("./database/conneti");
const employee = require("./modules/employee");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Wlcome to the work form home");

// })
// create a new employee



// app.post("/employee",(req,res)=>{
    // console.log(req.body);
    
    // you do not need express.json() and express.urlencoded()
    // for GET request or dElETE request. we only need it for post and put req
    // express.json() is a method inbuilt in express to recognize the incoming
    // request object  as a JSON object. This method is called as a middleware
    // in youre application using the code: app.use(express.json()); 
    // const user = new Employe(req.body);
    // promess
    // user.save().then(()=>{
        //     res.send(user);
        // }).catch((err)=>{
            //     res.send(err)
            // })
            
            // async awate
            app.post("/employee",async(req,res)=>{
        console.log(req.body);
        try{
            const user = new Employee(req.body);

            const createUser = await user.save();
            res.send(createUser);
        }catch(err){
            res.send(err)
        }
    })
    

// })
app.listen(port,()=>console.log("Linstin the port no 8000"));
