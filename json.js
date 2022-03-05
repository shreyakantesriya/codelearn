// json stands for javascript object notation. json is a lightweight formet for storing and transporting data.
// json is often usd when data is sent form a server to web
const fs = require("fs")
const bio = {
    name: "Priti",
    age: 22,
    sub:"com"
}
// console.log(bio);
const JsonData = JSON.stringify(bio);
// console.log(JsonData);
fs.writeFile ("Josn1.json",JsonData,(err)=>{
    console.log("flie is Done");
})
 fs.readFile("Josn1.json", "utf-8" ,(err,data)=>{
    //  console.log(data);
    // console.log("file is read");
    const obj = JSON.parse(data)
    console.log(obj);
})


// const obj = JSON.parse(JsonData)
// console.log(obj);

