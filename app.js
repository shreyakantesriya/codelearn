console.log(__dirname);
console.log(__filename);
// setInterval function
// setInterval(()=>{
//     console.log("1 mls complited ");
// },1000)

// let i = 0;
// console.log(i);
// setInterval(()=>{
//     i++;
//     console.log(i);
// },1000)

// setout timer function

// setTimeout(()=>{
//     console.log("1 ms setTimeout");
// },1000)


function welcome()  {
    console.log("Welcom to the word");
}
let i = setTimeout(welcome,1000)
let i1 = setInterval(welcome,1000)
// clearTimeout(i)
clearInterval(i1);
