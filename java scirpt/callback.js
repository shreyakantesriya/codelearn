console.log("Callback function in js")
const students = [
    { name: "Janki", study :"maths" },
    { name: "Vhbhav", study:"fection desing" }
]
function enrollStudent(student,Callback) {
    setTimeout(function () {
        students.push(student);
        Callback()
    }, 3000)
}
function getStudent() {
    setTimeout(function () {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
            
        });
        document.getElementById("student").innerHTML = str;
    }, 1000)
}
let newStudent = {name:"Altab",study:"meshol"} 
enrollStudent(newStudent,getStudent)
// getStudent()