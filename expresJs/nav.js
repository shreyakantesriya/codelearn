const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.write("<h1>hello form the Home  page</h1>");
    res.write("<h1>hello form the agane Home  page</h1>");
    res.send()

});
app.get("/about", (req, res) => {
    res.send("hello form the about  page");

})
app.get("/contect", (req, res) => {
    // res.send("hello form the contect  page");y
    res.send([
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 1,
            name: "Shreya"
        }
    ])
    


})
app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 1,
            name: "Shreya"
        }
    ])
})

//the methodes are identical when an object or array is passed but res.json() will also convert non-object such as null and undefined which are not valid json

app.listen(8000, () => {
    console.log("listing the port 8000");
})