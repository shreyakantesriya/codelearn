// promises are used to handle asynchronouse operation in js. they are easy to manage when dealing with mutiple asynchronouse opration whrer callbacks can create callback hell leading to unmanageble code.
// a promise is an object that keep track about whether a certain event has happened already or not.
// Determines what happens afterthe events has happend.

// promises consurct
const pobj = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rollNo = [1, 2, 3, 4, 5, 6];
        resolve(rollNo);
        // reject("Error");
    }, 2000);
});
const getBiodata = (indexData) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexData) => {
            let obj = {
                name: 'manu',
                age: 10
            }
            resolve(`my roll no is ${indexData} My name is ${obj.name}. and age is ${obj.age}`)
        }, 2000, indexData);
    })

}

// promise Consume/receving value
// pobj.then((rollno) => {
//     console.log(rollno);
//     return getBiodata(rollno[3])

// }).then((roll) => {
//     console.log(roll);
// })
//     .catch((err) => {
//         console.log(err);
//     });

// async Await

async function getdata(){
    try {
        const rollnodata = await pobj; 
        console.log(rollnodata);
        const biodata = await getBiodata(rollnodata[1])
        console.log(biodata);
       
       
    }
    catch (error) {
        console.log(error);
    }

   
}
getdata()