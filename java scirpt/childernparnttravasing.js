console.log("children parent the dom in js")
let cont =document.querySelector(".contener")
// console.log(cont.childNodes)

// childe node use s and criathig a new lines change in lenth and buges 
//  childern con ma raye text lines tage ne no gane

// childern is use onliy for elements
// console.log(cont.children)

// let nodName = cont.childNodes[1].nodeName
// console.log(nodName)

// node type
// 1> elements
// 2> Atribute
// 3> text node
// 8> comment
// 9> document
// 10> doctype
// let nodeType = cont.childNodes[ 9].nodeType
// console.log(nodeType)


let col = document.getElementById("section")
// console.log(col.children[1].children)

// use of first chlid use for text comment  etc
console.log(col.firstChild)
// first element child use for the first element


// console.log(col.firstElementChild)
// console.log(col.lastChild)
// console.log(col.lastElementChild)
// console.log(col.childElementCount)
// console.log(col.firstElementChild.parentNode)
// console.log(col.firstElementChild.nextSibling)
console.log(col.firstElementChild.nextElementSibling)


