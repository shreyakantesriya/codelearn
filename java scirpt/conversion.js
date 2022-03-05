console.log("type conversion and corcion");
let myver;
myvar = String(98);
console.log(myvar, (typeof myvar));
let sh;
sh = Number("shreya");
console.log(sh,(typeof sh))
let boolvar = String(true);
console.log(boolvar, (typeof boolvar))

let date = String(new Date());
console.log(date, (typeof date))

let arr;
arr = String([34,45,56]);
console.log(arr.length, (typeof arr))

let i= 8;
console.log(i.toString());

let str = Number("6736")
console.log(str, (typeof str))


// let num =parseInt("34")

let num =parseFloat("34.89")

console.log(num.toFixed(10), (typeof num ))

// type coercion
let str1 =Number("635")
let num1 = 34;
console.log(str1 + num1)