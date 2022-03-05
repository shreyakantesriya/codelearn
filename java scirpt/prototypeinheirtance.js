console.log("prototype inheritance in js")

const proto ={
    slogan : function(){
      return  "This compniy is best"
    },
    changeName: function(newName){
        this.name = newName
    }
}
// this creat the object
// let shreya = Object.create(proto);
// shreya.name ="shreya";
// shreya.std = "clg";

// this also creat the object
const shreya = Object.create(proto,{
    name: {value: "nayan",writable:true},
    std : { value: 12}
});
shreya.changeName("shreyu")

// console.log(shreya)

// employ constructer
function Employe(name,salary,mobileno){
    this.name = name;
    this.salary = salary;
    this.mobileno = mobileno
}

// slogan
Employe.prototype.slogan = function(){
    return  `This compniy is best recarts ${this.name}`
}
let shreyaobj = new Employe("shreya" , 400000000,72385371563)

console.log(shreyaobj , shreyaobj.slogan())

function porgrammer(name, salary, mobileno,langeuage){
    Employe.call(this, name ,salary, mobileno)
    this.langeuage = langeuage;

}
// inhaeritance the prototype
porgrammer.prototype = Object.create(Employe.prototype)

// manully set the constructer

porgrammer.prototype.constructor = porgrammer
Raju = new porgrammer("Raju", 25000, 3567281472, "c")
console.log(Raju, Raju.slogan())