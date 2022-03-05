// $(document).ready(function(){
//     console.log("we are using jQuery");
//     // $('selector').action() this is syntaex
// // this is the element selectore
//     $("p").click();
//     $("p").click(function(){
//         console.log("You click in pera");
//         // $("p").hide()
//         // $(this).hide()
//     });
// });





// ther are three main types of selectors in jQurey
// 1>elemnt selector
// 2>class selector
// 3>Id selector

$(document).ready(function () {
    // event in jQuery , 
    // mouse Event:click, double click, movesEnter, movesleav
    // keybord Event: keypress,keydown,keyup
    // form Event:submit,change,fouse,blur
    // document=lode,resize,scroll,unlode
    // $("p").dblclick(function () {
    //     console.log("You doubleclick in pera");
    //     // $("p").hide()
    //     // $(this).hide()
    // });
    // $("p").mouseleave(function () { 
    //     console.log("You mouselive in pera");

    // });

    // Demoing on method
    $('p').on(
    {
        click: function(){
        console.log("Thank for click ",this);
    },
    mouseleave: function(){
        console.log("Thanks for mouse leave")
    }

})


});
