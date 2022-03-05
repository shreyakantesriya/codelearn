console.log("Destructindg in js")
let a,b,c;
// [a,b] = [35, 78]
// console.log(a,b)

// let [a,b,c, ...d] = [1,2,3,4,5,6,7,8,9,10,11,13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

({a,b,c} = {a:34,b:45,c:67})
console.log(a,b,c)

const num = [27,78,90];
[a,b,c] = num;
console.log(a,b,c)

const book = {
    name:"Styagrah",
    // author:"r.v.Dhani",
    price: 100,
    start: function(){console.log("started")}
}
name, price = book
console.log(name,price, start)
start()

