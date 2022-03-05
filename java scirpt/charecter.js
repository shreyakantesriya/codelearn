console.log("Reguler expressiion charater sets")
let reg = /th[a-z]s/
reg = /th[^sdr]s/
// quantifiers
reg = /thi{2}s/
// groupings we use paranthese for groupings
reg = /(th){2}is/
const s = "ththis is good";
let result = reg.exec(s)
console.log(result)

if (reg.test(s)) {
    console.log(`This string ${s} matche the experation ${reg.source}`)

}
else {
    console.log(`This string ${s} not matche the experation ${reg.source}`)

}
