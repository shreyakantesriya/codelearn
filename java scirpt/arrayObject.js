console.log("Array and Object")
let arr = [34, 53, 35];
const frutes=[ "apple","banana", "Orenge"]
let mix = [435, 56,89, "Rani", "mani"]

const arr1 = new Array(562,267,72,"banana")
console.log(arr)
console.log(frutes)
console.log(mix)
console.log(arr1[3])

console.log(arr.length)
console.log(Array.isArray(arr))

frutes[2] = "Paenepal"
console.log(frutes)

let val = arr.indexOf(53)
console.log(val)

// mutating or modifying

arr.push(45);
console.log(arr)
arr.unshift(10)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
// arr.splice(0,2)
// console.log(arr)
let arr2= [45,8838,78]
arr = arr.concat(arr2)
arr.reverse(arr)
console.log(arr)



// Object

let obj = {
    name:"shreya",
    std :"clg",
    city :"rajkot"

}
console.log(obj)

