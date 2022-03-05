const tempLoad = ()=>{
 let tem = document.getElementById("tem")
   tem.innerHTML = "&#xf2cb";
   setTimeout(() => {
    tem.innerHTML = "&#xf2ca";
    tem.style.color="#d63031"
    // tem.style.color="black"
    
   }, 1000);
   setTimeout(() => {
    tem.innerHTML = "&#xf2c9";
    
   }, 2000);
   setTimeout(() => {
    tem.innerHTML = "&#xf2c8";
   }, 3000);
   setTimeout(() => {
    tem.innerHTML = "&#xf2c7";
    tem.style.color="green"
   }, 4000);

}



tempLoad();
setInterval(tempLoad,5000);