const express = require("express");
const app = express();

require("../src/db/conn");
const MensRanking = require("./modules/mens");
const router = require("./router/men")
const port  = process.env.PORT || 8000;

app.use(express.json())

app.use(router);

app.listen(port,()=>{
    console.log(`listen the no ${port}`);
});

