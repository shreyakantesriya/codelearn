console.log("async/await in js")
// async return Promise
async function func(){
console.log("Inside calling Shreya")
    const response = await fetch("sh.txt")
    console.log("Before response")
    const user = await response.text()
    console.log("usre resolved")
    return user;

    return "Shreya"
}
console.log("Befor calling Shreya")
let a = func()
console.log("After calling Shreya")
console.log(a)
a.then(data => console.log(data))
console.log("last line in js file")