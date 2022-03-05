console.log("AJAX in js")
let fbtn = document.getElementById("fbtn")
fbtn.addEventListener("click", buttonClick)
function buttonClick() {
    const xhr = new XMLHttpRequest();

    console.log("you have the click")
    // xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true)
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true)
    xhr.getResponseHeader("content-type", "appliction/json");

    xhr.onprogress = function () {
        console.log("on progress");
    }
    xhr.onreadystatechange = function () {
        console.log("ready stast is", xhr.readyState)
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response)
        }
        else {
            console.log("some error")
        }

    }
    perams = { "name": "test", "salary": "123", "age": "23" }
    xhr.send(perams);
    console.log("you have sueccessfully data fatch ")

}
let bbtn = document.getElementById("bbtn")
bbtn.addEventListener("click", bbtnHeandler)
function bbtnHeandler() {

    const xhr = new XMLHttpRequest();

    console.log("you have the click")
    xhr.open("GET","http://dummy.restapiexample.com/api/v1/employees",true)
   
   
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById("list")
            str=""
            for (key in obj){
                str  += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("some error")
        }

    }
  
    xhr.send();
    console.log("you have sueccessfully data fatch ")

}


// http://dummy.restapiexample.com/api/v1/employees