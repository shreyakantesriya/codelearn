console.log("Alram clock in js")

const bbtn = document.getElementById("bbtn")
bbtn.addEventListener("click",setAlram)
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
function ringbell() {
    audio.play();
    
}
function setAlram(e) {
    e.preventDefault()
    const alram = document.getElementById("alram")
    alramDate = new Date(alram.value);
    console.log(`setting alram ${alramDate}`)
    now = new Date();
    let timeToAlram =now-alramDate
    console.log(timeToAlram)
    if(timeToAlram<=0){
        setTimeout(()=>{
            ringbell();

        },timeToAlram)
    }
    
    
    
}