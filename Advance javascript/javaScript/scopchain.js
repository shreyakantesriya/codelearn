// the scop chain is used to resolve the value if variable names in javascript
// sccop chain in javascript in lexically defined which means that wee can see what the scope chain will be by looking at the code.
// at the top of scope chain is the global scope which is the window object in the browser.
// what is lexical scop
// a function that is lexically within  another function get access to the scope of the outer function.[inner function can get access to their parent function verrible But the vice-versa is not true]

var a = "hello";
function frist(){
    var b = "how are you"
    second();
    function second(){
        var c = "i am fine ";
        console.log(a+b+c);
    }
}
function three(){
    var d ="ok done";
    console.log(a+b+c+d);
}
frist()

