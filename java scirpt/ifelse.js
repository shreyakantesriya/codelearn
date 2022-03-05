console.log("if else")
const age = 19;
const drive= false
// const var=35;
// === equalu chack in type and conndion
// !== is not match in value and type
if(age===19)
{
    console.log("You are rady to vote election")
}

else
{
    console.log("you are not able to election vote")
}

if (typeof vari !== "undefined") {
    console.log("var is defined")    
}
else{
    console.log("var is not difined")
}

if(drive){
    console.log("Is drive")
}
else{
    console.log("is not drive")
}

// ternery opreter
console.log(age==45? "age is 45": "age is not 45")
// ek j condetion fllow karava mate break vapray 6
// break kadi leva ma ave tyare conddttion true tya pachi na pan statment ave
switch (age) {
    case 67:
        console.log("Is eble to drving lines")
        break;

    default: console.log("Is eble to not drving lines")
        break;
}