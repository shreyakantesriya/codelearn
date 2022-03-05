const fs = require("fs");
const child_process = require("child_process");
const { error } = require("console");
for(var i = 0;i<5;i++){
    var workerProcess = child_process.exec('node suprot.js ' + i , (err,stdout,stderr)=>{
        if (err) {
            console.log(error.stack);
            console.log("Error code: "+ error.code);
            console.log('single resived '+ error.signal);
        }
        console.log("stdout "+ stdout);
        console.log("stderr "+ stderr);

    })
    workerProcess.on('exit',(code)=>{
        console.log("Chlid process exit code"+ code);
    })
}