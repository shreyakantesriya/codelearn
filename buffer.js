// var buf = new Buffer.alloc(10);
// console.log(buf);
// var arrBuf = new Buffer.from([10,20,30,40]);
// console.log(arrBuf);
// var strBuf = new Buffer("This is dog","UTF-8")
// console.log(strBuf);

// buf = new Buffer.alloc(256);
// len = buf.write("simple text");
// console.log("opset writen: "+ len);
buf = new Buffer.alloc(26);
for(var i= 0;i<26;i++){
    buf[i]=i+97;

}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,5));
console.log(buf.toString("utf8"));
console.log(buf.toString(undefined,0,5));

