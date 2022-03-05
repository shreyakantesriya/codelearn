console.log("promises in js")
function fun(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error= true;
            if (!error) {
                console.log("fun:your promise are resolve")
                resolve()
            }
            else{
                console.log("fun:your promise not are resolve")
                reject("srrory!! aat not full fil ")
            }
        },1000)
    })
}
fun().then(function(){
    console.log("shy:Thanks for resolving")
}).catch(function(error){
    console.log("shy:next time try "+ error)
})
// Promise three type
// 1>resolve
// 2>reject
// 3>panding