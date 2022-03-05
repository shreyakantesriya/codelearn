// what is this keyword
// the javascript this keyword refers to the object it belonges to
// it has differnt values depanding on where it is used
// Alone this refers to the global object
// console.log(this);
// in a Rgular function this refers to the global object
// function sum(){
//     var add = 2+2;
//     console.log(add);
//     console.log(this);
// }
// sum()

// in a method this refers to the owner object

const obj = {
    name:"shreya",
    number:372683823,
    sum: function(){
        var add = 2+2;
        console.log(add);
        console.log(this.name);
        console.log(this);
    }
    
}
obj.sum();

// in a function in strict mode this is undefined
