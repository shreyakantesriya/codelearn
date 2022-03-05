console.log("Library Projcat");
// construrcter



function Book(id, name, author, type) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.type = type;
}
// displayconstructer
function Display() {

}

// add methodes to display prototype
Display.prototype.add = function (book,index) {
    // console.log("adding")
    tableBody = document.getElementById("tableBody");
    let uiString = ` <tr>
             <th scope="row">${book.id}</th>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td><button id = "${index}" onclick="delBook(this.id)"  class="btn btn-danger">Delete Book</a></td>
            </tr>`;
    tableBody.innerHTML += uiString;
}
function delBook(index){
    //  console.log( Display.deleteRow(0))
    document.getElementById("tableBody").deleteRow(index, 1);
}
Display.prototype.clear = function () {
    let form = document.getElementById("form");
    form.reset();
}
Display.prototype.validate = function (book) {
    if (book.id.length < 2 || book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, showmsg) {
    let msg = document.getElementById("msg")
    msg.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>Message:</strong> ${showmsg}
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div> `
    setTimeout(function () {
        msg.innerHTML = ""

    }, 2000)
}


// submite lisner to form
let form = document.getElementById("form");
form.addEventListener("submit", formSubmit);
function formSubmit(e) {
    // console.log("You have sucessfule submited library form");
    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let programming = document.getElementById("programming");
    let GATE = document.getElementById("GATE");
    let physics = document.getElementById("physics");
    let math = document.getElementById("math");
    let other = document.getElementById("other");
    if (programming.checked) {
        type = programming.value
    }
    else if (GATE.checked) {
        type = GATE.value
    }
    else if (physics.checked) {
        type = physics.value
    }
    else if (math.checked) {
        type = math.value
    }
    else if (other.checked) {
        type = other.value
    }
    let book = new Book(id, name, author, type);
    // console.log(book)
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear()
        display.show("success", "You Are the successfully finde the book")
    }
    else {
        display.show("danger", "Sorry you cann't find the book")
    }

    e.preventDefault();

} 
