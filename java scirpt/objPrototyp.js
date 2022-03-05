console.log("Object Prototype in js")
// object literl object.prototypes in start
let car = {
    name : "Swift",
    speed :200,
   
} 
function obj1(name){
    this.name = name

}
obj1.prototype.name = function(){
    return this.name
}
obj1.prototype.setName = function(newName){
    this.name = newName
}
 obj1 = new obj1("Shreya")
console.log(obj1)