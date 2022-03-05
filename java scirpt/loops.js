console.log("loops")
// for (let i = 0; i < 100; i++) {
//     // const element = array[i];
//     console.log(i)
// }

// j = 0
// while (j < 20) {
//     j++;
//     console.log(j)

// }
// k = 1
// do {

//     console.log(k)
//     if (k===4) {
//         break
        
//     }
//     k++
    
// } while (k < 10);
// console.log("done")
// k = 1
// do {

//     if (k===4) {
//         k++
//         continue;
        
//     }
//     console.log(k)
//     k++
    
// } while (k < 10);
// console.log("done")

let arr = [45,36,45,23,13]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
    
}

let obj={
    name:"Shreya",
    std:12,
    city:"Rajkot",
    school:"RAniper"

}
for(let key in obj){
    console.log(obj[key])
}
// arr.forEach(function (arr1) {
//     console.log(arr1)
// })