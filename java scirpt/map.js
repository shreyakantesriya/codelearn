console.log("maps in js")
// map can use any type key and value
const map = new Map()
const key1 ="mystr", key2 = {}, key3 = function(){};
map.set(key1,"this is str")
map.set(key2,"this is blank")
map.set(key3,"this is blank function ")
console.log(map)
// gating the value from a map
let value1 = map.get(key3)
console.log(value1)
// get the size of the map
console.log(map.size)

// you can loop using for of to get keys and value

for(let [key, value1] of map){
    console.log(key,value1)
}
// get only key
for(let key of map.keys()){
    console.log(key)
}


