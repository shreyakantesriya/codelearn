console.log("Reguler exprction metacharater symbols in js")
let regex = /worlds/
let s = "the worlds is good and worlds are best"
let result = regex.exec(s)
// let some metacherecter symbols
regex = /^the/ //^ means exprestion will match if string start with
regex = /st$/ //$ means expration will match if end of the means end of the string
regex = /worl*ds/ //matches any 0 or one chcracter
regex = /wa?orlds/ //? after charater means that charatr is optional
regex = /wor\*lds/

console.log(result)
if (regex.test(s)) {
    console.log(`This string ${s} matche the experation ${regex.source}`)

}
else {
    console.log(`This string ${s} not matche the experation ${regex.source}`)

}
