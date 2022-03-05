console.log("welcom to travels")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const password = document.getElementById("password")
const city = document.getElementById("city")
const state = document.getElementById("state")
let validEmail = false
let validPhone = false
let validname = false
let validPassword = false
let validCity = false
// console.log(name,phone,password,email,city)

name.addEventListener("blur",()=>{
    console.log("Name is blur")
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log("Your name is match")
        name.classList.remove("is-invalid")
        validname = true;
    }
    else{ 
        console.log("Your name is not match")
        name.classList.add("is-invalid")
        validname = false;
    }


});
phone.addEventListener("blur",()=>{
    console.log("Name is blur")
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log("Your name is match")
        phone.classList.remove("is-invalid")
        validPhone = true;
    }
    else{
        console.log("Your name is not match")
        phone.classList.add("is-invalid")
        validPhone = false;
    }


});
email.addEventListener("blur",()=>{
    console.log("email is blur")
    let regex = /^([_\-\.0-9a-z]+)@([_\-\.0-9a-z]+)\.([a-z]){1,7}$/;
    let str = email.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log("Your email is match")
        email.classList.remove("is-invalid")
        validEmail = true;
    }
    else{
        console.log("Your email is not match")
        email.classList.add("is-invalid")
        validEmail = false;
    }


});

password.addEventListener("blur",()=>{
    console.log("email is blur")
    let regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[a-zA-Z])(?=.*[a-zA-Z]).{8,}$/;
    let str = password.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log("Your password is match")
        password.classList.remove("is-invalid")
        validPassword = true;
    }
    else{
        console.log("Your password is not match")
        password.classList.add("is-invalid")
        validPassword = false;
    }


});
city.addEventListener("blur",()=>{
    console.log("city is blur")
    let regex = /^[a-zA-Z]{3,10}$/;
    let str = city.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log("Your city is match")
        city.classList.remove("is-invalid")
        validCity = true;
    }
    else{
        console.log("Your city is not match")
        city.classList.add("is-invalid")
        validCity = false;
    }


});



let bbtn = document.getElementById("bbtn")
bbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("you clicked by submit")
    console.log("name,phone,password,email,city")

    if(validname && validPhone && validEmail && validPassword && validCity){
        let failure = document.getElementById("failure")
        console.log("name,phone,password,email,city checkbox and state  are valid . submit in the form")
        let success = document.getElementById("success")
        success.classList.add("show")
        failure.classList.remove("show")
        // success.classList.add("show")
        // $("#failure").alert("close")
        
        // $("#success").show()
        // $("#failure").hide()
    }
    else{
        console.log("one  of name,phone,password,email,city,checkbox and state  not valid .heance not submiting the form plesce correct the error and try again")
        // let success = document.getElementById("success")
        let failure = document.getElementById("failure")
        failure.classList.add("show")
        success.classList.remove("show")

        // // $("#success").alert('hide')
        // $("#failure").show()
        // $("#success").hide()
       
    }
  


})

