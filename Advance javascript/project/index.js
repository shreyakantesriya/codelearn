const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const wordes = document.getElementById("wordes");
let StartTime,EndTime;

const  setofWord = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, explicabo!",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rerum!",
    "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Quaerat, aspernatur dolorem? Culpa nostrum tenetur molestiae explicabo repudiandae dolore molestias veniam?"
]
playGame= ()=>{
    let randomNumber = Math.floor(Math.random()*setofWord.length)
    msg.innerText = setofWord[randomNumber];
}

btn.addEventListener("click",function(){
    // console.log(this);
    if(this.innerText =="Start"){
        wordes.disabled = false;
        playGame();

    }
})