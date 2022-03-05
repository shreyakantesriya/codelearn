console.log("ES6 classes and inheritance")
// class onethype of blueprint 
class Employe {
    constructor(name, experience, division) {
        this.name = name,
            this.experience = experience
        this.division = division
    }
    slogan() {
        return `I am ${this.name} this companyi is the best`
    }
    yearexperience() {
        return 2020 - this.experience
    }
    static add(a, b) {
        return a + b
    }
}
class programmer extends Employe {
    constructor(name, experience, division, langauge){
        super(name, experience, division);
        this.langauge = langauge
    };
     favoriteLanguge(){
        if(this.langauge == "python"){
            return "python"
        }
        else{
            return "java"
        }

    }
    static multiply(a, b) {
        return a * b
    }
 
 
}


// shreya = new Employe("Meghna", 20, "php");
// console.log(shreya, shreya.yearexperience())

Rani = new programmer("Rani", 34, "bakand","django")
console.log(Rani.favoriteLanguge())
console.log(programmer.multiply(5,7))