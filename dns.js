const dns = require("dns");
// const { Server } = require("node:http");
dns.lookup('www.google.com',(err,addresses,family) =>{
    console.log("adderesses =",addresses);
    console.log("Family =" ,family);
});
// // console.log(dns.getServers());
// // console.log(dns.setServers(Server));
// dns.lookupService('127.0.0.1', 22,(err,hostname, service)=>{
//     console.log(hostname, service);
// });
