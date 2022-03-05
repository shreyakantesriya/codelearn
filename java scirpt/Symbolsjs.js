console.log("Symbol in js")
// symbol is primtive
// unick key mate symbol no use tya
const sym = Symbol("idantifier")
console.log("symbol is ", sym)
console.log(" type of symbol is ", typeof(sym))

obj ={}
const k = Symbol()
const k1 = Symbol()
obj["name"]= " good"
obj[k] ="Altab";
obj[k1] = "apple"
console.log(obj)
console.log(obj[k])
console.log(obj[k1])
// console.log(obj.k1) can no do this 

// symbols are ignor for in loop

for(key in obj){
    console.log(key, obj[key])
}
console.log(JSON.stringify(obj))

