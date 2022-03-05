// execution context
var globalEc =  "added"
function a(){
    var fa = "2nd function o/p1";
    console.log(fa);
    debugger;
    b();
    console.log("let's see when will be on console.");
}
function b(){
    debugger;
    console.log("2nd funtion o/p2");
    c();
}
function c(){
    debugger;
    console.log("3nd funtion o/p3");
}
debugger;
a();

