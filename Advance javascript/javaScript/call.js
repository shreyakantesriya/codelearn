// call() method is a predifined javascript method
// with call() an object can use a method beloning to another object
// const obj = {
//     name:"Manv",
//     langauge : "English",
//     oder: function(place){
//         console.log(`Hello all fell free order in ${this.name} and use for only ${this.langauge} and oder place is ${place}`);
//     }

   
// }
// // obj.oder("Rajkot")
// const obj2 ={
//     name:"Mansuk",
//     langauge : "gujarati",

   
// }
// obj.oder.call(obj2,"Anand")


// apply() Method
// The apply() method is similar to the call() method
// The call() method takes arguments separately. the apply() method taskes arguments as an array

const obj = {
    name:"Manv",
    langauge : "English",
    oder: function(place){
        console.log(`Hello all fell free order in ${this.name} and use for only ${this.langauge} and oder place is ${place}`);
    }

   
}
// obj.oder("Rajkot")
const obj2 ={
    name:"Mansuk",
    langauge : "gujarati",

   
}
obj.oder.apply(obj2,["Anand"])

// bind() method
// by this method, we can bind an object to a common function so that the function gives different result when its need.

const obj1 = {
    name:"shreya",
    fild:"devlopment",
    consept: function(){
        console.log(`my name is ${this.name}, and she is work for the ${this.fild} `);
    }
}
obj1.consept()
let obj3 = obj1.consept;
// obj3();

// the bind() method takes an object as an frist argument and creates new function
let obj4 = obj1.consept.bind(obj1)
obj4();
