console.log("Interator in js")
function iterator(sh) {
    let index = 0
    return{
        next: function(){
            if (index < sh.length){
               return {
                    value: sh[index++],
                    done: false
                }
            }
            else{
                return {
                    done: true
                }
            }
        }
    }
    
}
const arr = ["pan","book","pancil"]
console.log(arr)

// using the iterator

const store = iterator(arr)
console.log(store.next().value)
console.log(store.next().value)
console.log(store.next().value)
console.log(store.next().value)
