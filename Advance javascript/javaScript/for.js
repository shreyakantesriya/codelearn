// forEach method in js
//  the forEach methods call a function once for each element in array in order
// syntax: arr.forEach(callback(currentValue[,index,[array]])[,thisArg]);
// Argument:Descripation, currentValue: Required. the value of current element,index:optional.the array index of the current element,arr:optinal. the arry object the current element belongs to
const arr = ['js','python','css','AI','ML'];
// for(let x=0;x<arr.length;x++){
// console.log(arr[x]);
// }
arr.forEach((element,index,arr)=>{
    console.log(`${index+1} : ${element} : ${arr}`);
})
const num =[1,2,5,6,10,20]
num.forEach((arr)=>{
    console.log(`${arr+100}`);
})

// for of loop
// the js for/of statement loops through the value of an iterable object
// syntax: for(var of iterable){//code block to be executed}
for (const items of arr) {
    console.log(items);
}
// for of iterble objects..
// iterate  one by one check the iterbel objects items
//iterable object: array ,string

// for in
// for/in loops allow us to loops through the properties of an object
// syntax: for(var in obj){//code block to be executed}
const obj ={
    name:"Shreya",
    age:18
}
for ( prop in obj) {
    console.log(prop);
}