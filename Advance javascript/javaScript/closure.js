
//a closure is the combination of a function and the lexical environment withen which that function was declared.

// closure in action that is inner function can have access to other function variabes as well as all the global varibles

// the return statement does not execute the inner function function is executed only when followed by(), but rather the return statement return the entire body of the function

const outerFunction =(a)=>{
    let b = 15;
    const innerfunction =()=>{
        let sum = a+b;
        console.log(sum);
    }
    return innerfunction;
}

let inner = outerFunction(5);
console.dir(inner);
inner()