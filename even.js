const events = require("events");
const eventEmitter =  require("eventEmitter");
var connectHandler = ()=>{
    console.log("connection is sucessfull");
    eventEmitter.emit("data_recevied");
}
eventEmitter.on("connection")

