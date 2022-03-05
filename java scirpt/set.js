console.log("set in js")
const set = new Set()
console.log(set)
set.add("this");
set.add("my name");
set.add(56);
set.add(589);
console.log(set)
console.log(set.size)
console.log(set.has(56))

console.log("befor remove",set.has(56))
set.delete(56)
console.log("after remove",set.has(56))
// itarating a set
for(let item of set){
    console.log(item)
}
