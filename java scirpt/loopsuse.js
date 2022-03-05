console.log("for vs for-in and for-of loop")
let store = ["book","pan","pancil","campas","color"]
// ****************** for in loop ******************************************
// Traditional for loop
// for (let index = 0; index < store.length; index++) {
//     const element = store[index];
//     console.log(element)
    
// }

let obj={
    name:"shreya",
    lang :"python",
    hobde:"game"
}
// console.log(obj);
// iterating in traditional loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element)
// }

// itarating an object using for in loop
for(let key in obj){
    console.log(obj[key])
}

str = "this is good"
for(let char in str){
    console.log(str[char])
}

// ******************************for of loop **************************************
console.log(" ******************************for of loop **************************************")
store = ["book","pan","pancil","campas","color"]
for(let name of store){
    console.log(name)
}
for(let name of str){
    console.log(name)
}


