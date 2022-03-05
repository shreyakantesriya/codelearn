console.log("Date object in js")
// refernces data type
let today = new Date();
console.log(typeof today)
let otherDate = new Date("10-10-2000 4:54:08")

console.log(otherDate)
let a ;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a)