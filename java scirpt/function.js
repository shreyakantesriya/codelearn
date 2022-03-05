console.log("function and scop")
// function experstion
let name = "Manju "
let name1 = "Manshi "
const vazr =function goodwish(name, thanks){
    let msg = ` ${name}hi how are you you just fine in the life and enjoy the clg life and maney funn in frindes ian seen the photes and video you are the vaey joyefull in clg life and hostle lifeyou tak care ${thanks} `
return msg
}
// object ni under pan function banavi skay

let val =  vazr(name, "Thank of you")
console.log(val)

const obj={
    name:"Shreya",
    std:12,
    city:"Rajkot",
    school:"RAniper",
    geme:function(){
        return "GTA"
    }


}
console.log(obj.geme())
// array.forEach(element => {
    
// });
arr =[34,56,78,90,23]
arr.forEach(function(element, index) {
    console.log( index, element)
})

// scope in js globel varibal and local varibal
// let and const is block level scop
// var is globe scop function lavel scop
i= 45
if(1){
    var i=34
    console.log(i);

}
console.log(i);

function ui(name)
{
    let i=9
    console.log(i)
   return `this is a ${name} ui`
   
}
console.log(ui("Shreya"),i)
