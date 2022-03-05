console.log("Asynchronous in js")
setTimeout(() => {
    for (let i = 0; i <4000; i++) {
        const element =  i;
        console.log(element)
        
    }
    
},100);

console.log("done print")