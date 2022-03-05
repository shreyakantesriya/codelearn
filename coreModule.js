// consider modules to be the same as javaScript libraries. A set of function you want to indclud in your appliction
// node.js has a set of built-in module which you can use without any futher installation
// const std = 12;
// console.log(std);

 const fs = require("fs");
//  fs.writeFileSync('read.txt',"Welcom to the jorny");
//  fs.writeFileSync('read.txt',"Welcom to the jorny in mubai");
// fs.appendFileSync("read.txt"," how are you")


const buf_data = fs.readFileSync('read.txt')
console.log(buf_data);

// node.js include an addtional data type called buffer
// not available in browser's javascript
// buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network

// { <Buffer 57 65 6c 63 6f 6d 20 74 6f 20 74 68 65 20 6a 6f 72 6e 79 20 69 6e 20 6d 75 62 61 69 68 6f 77 20 61 72 65 20 79 6f 75 20 68 6f 77 20 61 72 65 20 79 6f
// ... 1 more byte> }

org_data = buf_data.toString();
console.log(org_data);

// to rename the File

fs.renameSync('read.txt','readWrite.txt')


