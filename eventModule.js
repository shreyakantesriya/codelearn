// Event module 
// Node.js has a built-in module,called "events"
// where you can create- fire- and listen for- your own events
// registering for the event to be fired only one time using once.
// creat an event emitter instance and register a couple of callbacks
// registering for the event with callback parameters

const EventEmitter = require("events");
const event = new EventEmitter();
event.on("sayName", () => {
    console.log(("Your name is shreya"));
})
event.on("sayName", () => {
    console.log(("Your name is shreya"));
})
event.on("sayName", () => {
    console.log(("Your name is shreya"));
})
event.on("sayName", () => {
    console.log(("Your name is shreya"));
})

event.emit("sayName");
