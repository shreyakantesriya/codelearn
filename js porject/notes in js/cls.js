let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = ""
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log("button text ",buttonText)
        if(buttonText=='*'){
            buttonText ="*";
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue)
        }
        else if(buttonText == "C"){
            screenValue = ""
            screen.value = screenValue;
        }
      
        else{
            // screenValue = ""
            screenValue += buttonText
            screen.value = screenValue;
        }
    })

   
}
