const fs = require("fs");
// fs.mkdir("asyc",(err)=>{
//     console.log("folader is crited");
// })
// fs.writeFile("asyc/as.txt","Hi I am Juhi I hope all of you are fine",(err)=>{
//     // console.log(data);
//     console.log("File is crieted");
// })
//  fs.appendFile("asyc/as.txt", " yes mam All are fine",(err)=>{
//     console.log("File is append");
// })

// const data = fs.readFile("asyc/as.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// fs.rename("asyc/as.txt","asyc/asc.txt",(err)=>{
//     console.log("file is rename");
// })
// fs.unlink("asyc/asc.txt",(err)=>{
//     console.log("file is delet");
// })
fs.rmdir("./asyc",(err)=>{
    console.log("Folder is delete");
});