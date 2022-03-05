console.log("Creating, Removing & Replacing Elements in js")
let element = document.createElement("li");
let text = document.createTextNode('I am')
element.appendChild(text)
// add clss name to the li element
element.className= "cre"
element.id= "crea"
element.setAttribute('title' ,'my')
let ul = document.querySelector("ul")
// element.innerHTML= "<b>Maile</b>"
// console.log(ul)

// dom ni under mukava mate appedent childe no use kari skay
// ul.appendChild(element)
// console.log(element)

// let elem =document.createElement("h3")
// elem.id = "elem"
// elem.class = "elem"

// let text1 = document.createTextNode("How are you")
// elem.appendChild(text1)
// element.replaceWith(elem)
// console.log(elem)

// let mul = document.getElementById("mul");
// mul.replaceChild(element,document.getElementById("um") )
mul.removeChild(document.getElementById('lum'))