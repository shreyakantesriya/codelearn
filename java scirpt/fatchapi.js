console.log("Fatch API")
let btn = document.getElementById("btn")
let content = document.getElementById("content")
// function getData(){
//     console.log("Start the get data")
//     url = "sh.txt"
//     fetch(url).then((response)=>{
//         console.log("Inside first than")
//         return response.text();
//     }).then((Data)=>{
//         console.log("Inside first than")
//         console.log(Data)
//     })
// }
// console.log("Before get Data")
// getData()
// console.log("After get Data")


// function getData(){
//     console.log("Start the get data")
//     url = " https://api.github.com/user"
//     fetch(url).then((response)=>{
//         console.log("Inside first than")
//         return response.json();
//     }).then((Data)=>{
//         console.log("Inside first than")
//         console.log(Data)
//     })
// }
// console.log("Before get Data")
// getData()
// console.log("After get Data")


function postData(){
    // console.log("Start the get data")
    Data = 	`{"name":"Salu","salary":"56446","age":"19"}`
    url = " http://dummy.restapiexample.com/api/v1/create"
    pera ={
        method:"post",
        headers:{
            "content-type":"appliction/json"
        },
        body:Data
    }
    fetch(url,pera).then((response)=>{
        // console.log("Inside first than")
        return response.json();
    }).then((Data)=>{
        // console.log("Inside first than")
        console.log(Data)
    })
}
postData()




