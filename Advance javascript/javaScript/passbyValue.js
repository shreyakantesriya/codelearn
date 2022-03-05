// pass by value
let ab = 500
let a =5;
let b = a;
b = b+5;
console.log(a);
console.log(b);

// pass by reference
const obj = {
    user : "mhoan",
    password :123

}
const obj2 = obj;
obj2.password =1234
console.log(obj);
console.log(obj2);

const fun = (ac,ba)=>{
    ac=200;
    ba.password =12345;
}
fun(ab,obj)
console.log(ab);
console.log(obj.password);

