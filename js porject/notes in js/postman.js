console.log("PostMan Clone")

function getElementString(string) {
    let div = document.createElement('div')
    div.innerHTML = string
    return div.firstElementChild;
}

let addedParamCount = 0;

let parameterBox = document.getElementById("parameterBox")
parameterBox.style.display = "none"


let peraRedio = document.getElementById("peraRedio")
peraRedio.addEventListener("click",()=>{
    document.getElementById('jsonBox').style.display = "none"
    document.getElementById('parameterBox').style.display ="block"
})

let jsonRedio = document.getElementById("jsonRedio")
jsonRedio.addEventListener("click",()=>{
    document.getElementById('parameterBox').style.display = "none"
    document.getElementById('jsonBox').style.display ="block"
})

let add = document.getElementById("add")
add.addEventListener("click",()=>{
  let params = document.getElementById("params")
  let string = `   <div class="row">
  <label for="post" class="col-sm-2 col-form-label">
  Perameter-${addedParamCount + 2}</label>

  <div class="col my-1">
      <input type="text" class="form-control " placeholder="Enter perameter-  ${addedParamCount + 2} key" id="perameterKey  ${addedParamCount + 2}"> 
  </div>
  <div class="col ">
      <input type="text" class="form-control" placeholder="Enter perameter-${addedParamCount + 2} value" id="perameterValue   ${addedParamCount + 2}">
  </div>
  <button class="btn btn-dark col-md-1 my-1 deleteparam">-</button>
</div>` ;
let paramElement = getElementString(string)
// console.log(paramElement)
params.appendChild(paramElement)
let deleteparam = document.getElementsByClassName("deleteparam")
for(item of deleteparam){
    item.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
    })
}
addedParamCount++;

})

let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    document.getElementById("responsJsonText").value = "Please wait...Facthing Respons"
    let url = document.getElementById("url").value
    let requestType = document.querySelector("input[name = 'requestType']:checked").value
    let contentType = document.querySelector("input[name = 'contentType']:checked").value

    console.log("url is ", url)
    console.log("requestType is ",requestType )
    console.log("contentType is ", contentType)
    
    if(contentType=="pera"){
        data ={}
        for(i=0;i<addedParamCount+1;i++){
            if (document.getElementById('perameterKey' + (i+1)) !=  undefined) {
                
                let key = document.getElementById('perameterKey' +(i+1)).value
                let value = document.getElementById('perameterValue' +(i+1)).value
                data[key] = value;
            }
            data = JSON.stringify(data)
        }
    }
    else{
        data = document.getElementById("requestJsonText").value
        
    }
    console.log("url is ", url)
    console.log("requestType is ",requestType )
    console.log("contentType is ", contentType)
    console.log("data is ", data)
if (requestType == "GET") {
    fatch(url, {
        method: "GET"
    })
    .then(respons => respons.text())
    .then((text)=>{
         document.getElementById("responsJsonText").value = text
    }) 

    
}
else{
    fatch(url, {
        method: "POST"
    })
    .then(respons => respons.text())
    .then((text)=>{
         document.getElementById("responsJsonText").value = text
    }) 
}
})