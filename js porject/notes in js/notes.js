console.log("Welcome to note app this is very usefull for criar")
// user add the notes and add to the loacl storeage
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    let myObj = {
        title:addTitle.value,
        text:addTxt.value
    }
    noteObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addTxt = "";

    // console.log(noteObj);
    showNotes();


});
// function to show for local storage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    let HTML = "";
    noteObj.forEach(function (element, index) {
       HTML += `
        <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id = "${index}" onclick="delnotes(this.id)"  class="btn btn-dark">Delete note</a>
        </div>
        </div>`
    });
    let notesElm = document.getElementById("notes")
    if (noteObj.length != 0) {
        notesElm.innerHTML = HTML;
    }
    else {
        notesElm.innerHTML = `Nothing show! "use of add note"`
    }
}

// function to delete notes

function delnotes(index) {
    // console.log("You are sure the notes deleting", index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    noteObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes()
}

let surchText = document.getElementById("surchText");
surchText.addEventListener("input",function(){
    let inputVal = surchText.value.toLowerCase()
    // console.log("Input event fired!",inputVal)
    let noteCard = document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        // console.log(cardTxt)
        if(cardTxt.includes(inputVal)){
            element.style.display = "block"
        }
        else{
           
                element.style.display = "none"
            
        }
    })

})