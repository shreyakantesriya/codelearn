// what is fatch api
// the fach api provides a fetch() method defined on the window object, which you can use to perform requests.
// this methods return a promise that you can use to retrieve the response of the request.
// with promise
// fetch('https://api.covid19api.com/summary')
//     .then((apidata) => {
//         // console.log(apidata);
//         return apidata.json();
//     }).then((acutdata) => {
//         // console.log(acutdata);
//         const myData= acutdata.Countries[76];  
//         document.getElementById('apiIndia').innerHTML = `my country name is ${myData.Country} and total confrimede case ${myData.TotalConfirmed}`;
//     }).catch((err)=>{
//         console.log(err);
//     })

// async-await api
async function getCovidApi(indexApi) {
    try {
        const jsionData = await fetch('https://api.covid19api.com/summary')
        //  console.log(jsionData);
        const jsdatas = await jsionData.json();
        const jsdata = jsdatas.Countries[`${indexApi}`]
        document.getElementById('apiIndia').innerHTML = `my country name is ${jsdata.Country} and total confrimede case ${jsdata.TotalConfirmed}`;
        console.log( `my country name is ${jsdata.Country} and total confrimede case ${jsdata.TotalConfirmed}`);

    } catch (error) {
        console.log(error);
    }

}
getCovidApi(76);
getCovidApi(77);
getCovidApi(78);
getCovidApi(81);
getCovidApi(83);
getCovidApi(84);
getCovidApi(86);