console.log("shorthand charceter in js ")
let reg = /\wis/ //\w is cllaed by world char
reg = /\w+ood/ //\w+means one or more char
reg =/\Wgood/ // non word charceter
reg =/\ska good/  //match withe space char
reg =/\Ska good/ //non withe space char
reg =/ka\b/ //word boundary
// assertion
reg = /th(?=i)/
reg = /th(?!s)/


const s = "this is ka good";

let result = reg.exec(s)
console.log(result)

if (reg.test(s)) {
    console.log(`This string ${s} matche the experation ${reg.source}`)

}
else {
    console.log(`This string ${s} not matche the experation ${reg.source}`)

}
