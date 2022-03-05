console.log("clock in js")
function updateClock(){
    let time = new Date()
    let cuureetHour = time.getHours()
    let cuureetMinutes = time.getMinutes()
    let cuureetSeconds = time.getSeconds()
    cuureetMinutes =(cuureetMinutes<10 ? "0" : "") + cuureetMinutes;
    cuureetSeconds=(cuureetSeconds<10 ? "0" : "") + cuureetSeconds;
    cuureetHour = (cuureetHour<10 ? "0" : "") + cuureetHour;

    let timeofDay = (cuureetHour<12)? "AM" : "PM";
    cuureetHour = (cuureetHour>12) ? cuureetHour - 12 :cuureetHour
    cuureetHour = (cuureetHour==0) ?  12 :cuureetHour
    timeStr = cuureetHour + ":" +cuureetMinutes + ":" + cuureetSeconds + " " + timeofDay

    document.getElementById("clock").innerHTML = timeStr
}