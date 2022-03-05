console.log("Object Literals Counstructores and OOP")
// object literal
let car = {
    name : "Swift",
    speed :200,
    run: function(){
        console.log("Car is Runnig")
    }
} 


// constructer
// creatin a constrater
function GeneralCar(name, speed){
    this.name = name;
    this.speed = speed;
    this.run = function(){
        console.log(`${this.name }is running`)
    }
}
car1 = new GeneralCar("scoda", 400)
console.log(car1)