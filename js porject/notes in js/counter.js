const counts = document.querySelectorAll(".count");
counts.forEach((count)=>{
    // console.log(count);
    count.innerHTML = 0;
    
    const updetCount = () =>{
        const target = +count.getAttribute("data-target");
        // console.log(typeof target);
        const startCount =  Number(count.innerHTML);
        const incr = target/200 ;
        if (startCount < target) {
            count.innerHTML = `${Math.round(startCount + incr)}`
            setTimeout(updetCount,10)
        }
        else{
            count.innerHTML = target
        }
    }
    updetCount();

});


// there are serveral way to achive it

// using the unary pluse oprater
// var n = +str

// The number construtor
// var n = Number(str)

// the pareseFloat function
// var n = parseFloat(str)