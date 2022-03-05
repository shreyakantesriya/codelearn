console.log("string properties, methods , templeat literal")
const name = "Shreya";
const greting = "good morning ";
console.log(greting  + ' '+  name);
let html;
html ="<h1>Heaning</h1>" + 
    "<p> this is pera </p>"

html = html.concat("this ", "is ", "apple")
console.log(html)
console.log(html.length)
console.log(html.toLocaleLowerCase())
console.log(html.toUpperCase())
console.log(html.toLocaleUpperCase())
console.log(html.toString())

console.log(html[0])
console.log(html.indexOf("h1"))
console.log(html.lastIndexOf("h1"))
console.log(html.charAt(2))
console.log(html.endsWith("apple"))
console.log(html.includes("h3"))
console.log(html.substring(0,4))
console.log(html.slice(-4))
console.log(html.split(" "));

console.log(html.replace("h1","h2"))

let store1 =" book";
let store2= "pen";
let myhtml = `hello ${name}
            <h1>Heading</h1>
            <p>You perche ${store1} and
            ${store2}`;
document.body.innerHTML = myhtml;
