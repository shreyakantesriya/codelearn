console.log("Event object in js")
// addEventListener use for the lisn the event
// document.getElementById("heading").addEventListener("click",function(e){
//     console.log("you have click the heding")
//     vare = e.target
//     console.log(vare)
//     // location.href = "http://google.com"
// });
// koy pan deflat event hoy tane baypass karva mate preventdefulat no use thy
// let btn =document.getElementById("btn");
// btn.addEventListener("click", fun1)
// btn.addEventListener("dblclick", fun2)
// btn.addEventListener("mousedown", fun3)
// function fun1(e){
//  console.log("Thank you for visting",e)
//  e.preventDefault()
// }
// function fun2(e){
//     console.log("Thank you for visting",e)
//     e.preventDefault()
//    }
//    function fun3(e){
//     console.log("opps mosues down",e)
//     e.preventDefault()
//    }
let eml = document.getElementById("heading").addEventListener("mouseenter",function(){
    console.log("You Enter")
})
eml = document.getElementById("heading").addEventListener("mouseleave",function(){
    console.log("You exied")
})
eml = document.querySelector(".contener").addEventListener("mousemove",function(e){
    console.log(e.offsetX, e.offsetY )
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY } )`
    console.log("You have move")
})

