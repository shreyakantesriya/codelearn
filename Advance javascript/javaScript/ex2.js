const obj = {
    name:"shreya",
    number:372683823,
    sum: function(){
        var add = 2+2;
        console.log(add);
        console.log(this.name);
        console.log(this);
        function obj2(){
            var name = "Monika";
            console.log("obj2 method name: ",name);
            console.log(this);
        }
        obj2()
    }
    
}
obj.sum();