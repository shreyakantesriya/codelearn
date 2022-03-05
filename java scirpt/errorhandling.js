console.log("error handling and try catch in js")

let a = "Altaf Akii"
a = undefined
if(a != undefined){
    throw new Error("This is Not undifind")

}
else{
    console.log("This is undifind")
}

try {
    // garrsfdfxsx
    console.log("We are try ")
    functionhsih()
} catch (error) {
    console.log("Are you okay?")
    // console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("finally we will the run")
}