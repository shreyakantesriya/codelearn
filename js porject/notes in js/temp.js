const calculateTemp = () => {
    const numberTemp = document.getElementById("temp").value
    // console.log(numberTemp);
    const selctTemp = document.getElementById("temp_diff").value

   const celFah = (cel) =>{
       let fahrenheit = Math.round((cel *9/5)+32);
       return fahrenheit;
   }
   const FahCel = (fah) =>{
    let  Celsius = Math.round((fah - 32)*5/9);
    return Celsius;
}
//    console.log(valueTemp);
    // console.log(selctTemp);
    let result
    if (selctTemp == 'cel') {
        result = celFah(numberTemp);
        document.getElementById("resultContainer").innerHTML = `= ${result } °Fahrenheit`;
    }
    else{
        result = FahCel(numberTemp);
        document.getElementById("resultContainer").innerHTML = `= ${result } °Celsius`;
    }
}