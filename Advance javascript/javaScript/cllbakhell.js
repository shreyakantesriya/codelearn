const getRollNo = () =>{
    setTimeout(() => {
        console.log("api get num");
        let rollNo = [1,2,3,4,5,6];
        console.log(rollNo);
        setTimeout((rollno) => {
            const obj = {
                name:"Hitakshi",
                age:12
            }
            console.log(`my roll no is ${rollno} My name is ${obj.name}. and age is ${obj.age}`);
            setTimeout((name) => {
                obj.gender = "female"
                console.log(`my roll no is ${rollno} My name is ${obj.name}. and age is ${obj.age} and i am ${obj.gender}`);
            }, 2000,obj.name);
        }, 2000,rollNo[1]);
    }, 2000);
    
}
getRollNo();