class library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBook = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element)
        });
    }
    issueBook(bookName,user){
        if (this.issuedBook == undefined){
            this.issuedBook[bookName] = user;
        } 
        else{
            console.log("This book is alraedy issued")
        }

    }
    returnBook(bookName){
     delete this.issuedBook[bookName];

    }
}