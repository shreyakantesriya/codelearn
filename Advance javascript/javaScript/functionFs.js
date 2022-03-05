// 1> in js we can assign the a funtiojn to a variable.
// Also as a methods
// /Assigning a method in js is super easy as well. similar to how we can assign a function to a variable we can assign a function as a value to key in an object.


// varibel
// const you = function(){
//     console.log("welecome to the javascript");
// } 
// you();

// object
// const obj = {
//     name:"shreya",
//     qulifiction:function(){
//         console.log('I have BE');
//     }
  

// }
// obj.qulifiction()

// 2> Pass a function as an argument
// since function are the first class citizen in js we are able to pass
// 3> Returning function
// this is key concept when it comes to functional programming

// function a(){
//     return function b(){
//         console.log("How are you  i hop all are fine and start for the learing the javascript");
//     }
   
// }
// double pera iks mening is  the function under dushre function ko call karna
// a()()
// const c = a()
// c()


// callback function
// Any function that is passed as an argument is called a callback function

const fun = ()=>{
    setTimeout(() => {
        console.log('welcome fun and enjoy');
    }, 3000);
    
}
const fun1 = ()=>{
    console.log('welcome fun and enjoy the holday');
}
fun()
fun1()
// a callback is a functiion that is to be executed after another function has finished executing-henece the name 'call back'


// why callback function 
// js is an event driven language. this means that instead of waiting for a response before moving on js willkeep executing while listening for other events.
// callback are a way to make sure certain code doesn't execute until other code has already finshed execution.

const p1 = (friend, callFrnd) =>{
    console.log(`i am busy right now. i am talking to ${friend}. i will call you back.`);
    callFrnd();
}

const p2 = ()=>{
    console.log(`Hey what's up. I call back you`);
}
p1("sumit",p2);

