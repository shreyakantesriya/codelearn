console.log("Generatior in js")
function*num(){
    let i= 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while (true) {
        yield i++;
        
        
    }
}
const gen = num()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().value)
