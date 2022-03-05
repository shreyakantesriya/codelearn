// A function without a name
// document.addEventListener(type:DOMString, callback:EvevntListener, capture?:boolean)

document.addEventListener('dblclick',function(){
    console.log("thaks for visiting");
})

let mul = function(a,b){
    let mul = a*b;
    console.log(mul);
}
mul(4,6)

// higher oder function

//higher oder functions are functions that take other functions as arguments or return functions as their results.

const quction = (name)=>{
    if(name==="shreya"){
        return function(topic){
            console.log(`Hi ${name} what is ${topic}?`);
        }
    }
    if(name==="sourabh"){
        return function(topic){
            console.log(`Hi ${name} what is ${topic}?`);
        }
    }
    else{
        return function(){
            console.log('welcome to compney');
        }
    }
}
quction("shreya")("OOPS consepts")
quction("sourabh")("real time example of sql qury")


// Immediately invoked function Expression
// An IIFE is a javascript function that runs ass sooon as it is defined
// It is desing pattern which is also known as a self-Executing Anonymous Function and containes two major parts
// the first the anonymous function with lexical scop enclosed within the grouping oprator(). This prevents accessing varibles within the IIFE idiom as well as polluting the global scope.
// the second part creates the Immediatly invoked function exprssion() through which the Js engine will directly interpret the function.

// function authorName(){
//     console.log("Author name is mikal");
// }
// authorName()

// ifef
( function() {
    var aName = "mikal"
    console.log(`Author name is ${aName}`);
} )()