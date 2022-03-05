console.log("Local and Session storage in js")
// session storage use for one session and browser off karva ma ave tyare te key and value are delete
// local storag store the local value in sotrage
let impArray = ["apple", "banana", "orange","quvi"]
// localStorage.setItem("name" , "shreya")
// localStorage.setItem("name1" , "Shreyu")
// localStorage.setItem("fruts" ,JSON.stringify (impArray))

// localStorage.removeItem("name")
// localStorage.clear
let name = localStorage.getItem('name')
name = JSON.parse(localStorage.getItem('fruts'))
console.log(name)

// sessionStorage.setItem("sessionname" , "shreya")
// sessionStorage.setItem("sessionname1" , "Shreyu")
// sessionStorage.setItem("sessionfruts" ,JSON.stringify (impArray))