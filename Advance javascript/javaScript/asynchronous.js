// synchronous js : A synchronous request blocks the client until opration completes i.e. browser is unresponsive. in such case javascript engine of the browser is blocked.
// Asynchronous js (ajax web application model)
// An aschronous request doesn't block the client i.e browser is responsive.
// at that time user can perform another opration also. in such case javascript engin of the browsesr is not blocked..
const fun1=()=>{
    setTimeout(() => {
        console.log("fun1 is started");
    }, 2000);
   
}
const fun = ()=>{
    console.log("Fun is stated");
    fun1();
    console.log("Fun is end");
} 
fun()