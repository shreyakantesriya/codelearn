// pass by the value primetive type
// let a = 5;
// let b = a;

// b = b+5
// console.log(a);
// console.log(b);

// // pass by refrence non-primetive type
// const obj ={
//     name:"Shreya",
//     moNo:984293013
// }
// const obj1 = obj
// obj1.moNo=3463786389
// console.log(obj);
// console.log(obj1);



let num = 100;
const obj = {
    name:"Shreya",
    moNo:984293013
}
const fun = (a,b)=>{
    a =200;
    b.moNo=3463786389;
}
fun(num,obj)
console.log(num);
console.log(obj.moNo);