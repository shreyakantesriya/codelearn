console.log("Reguler Experastion and releted funtion in js");
// this is reguler expriton in js 
let reguler = /world/ ; 
//  reguler = /world/g ;//g is global flage
//  reguler = /world/i;// i is case insensitive

console.log(reguler);
// source meaing in the reguler exprtion ma je lakhe hoy tane key
console.log(reguler.source);

let h  ="this is the gerinting the world the world"
// function to match in reguler exprction
// 1> exec() = this  function will return an array for match or null for no match

    let result = reguler.exec(h)
    console.log(result)
    // result = reguler.exec(h)
    // console.log(result)
    // result = reguler.exec(h)
    // console.log(result)



// 2> Text() return true and false
 result = reguler.test("h")
console.log(result);


// 3> match() = it will return an array of results or null
let result1 = h.match(reguler)
console.log(result1)

// 4> search() = return index of first match else-1

let result2 = h.search(reguler)
console.log(result2)

// 5>replace()=> return new replaced string with all the replacement
let result3 = h.replace(reguler, "Shreya")
console.log(result3)