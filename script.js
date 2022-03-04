function Book (title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

function UI() { }

// UI.prototype.addBookList = function (book) {
// const table = document.getElementById("list");
// const tr = document.createElement("tr");
// console.log(table.append(tr));

// };


UI.prototype.clearFields = function () {};


Book.prototype.toString = function bookToString() {
    return ` ${this.title} is a ${this.author} ${this.isbn}`;
  }

document.getElementById("book-form").addEventListener("submit", (e) => {
   e.preventDefault();
   const title = document.getElementById("book-title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;
    
   console.log(title);
   
   const book = new Book (title, author, isbn);
   const ui = new UI ();
   //ui.addBookList(book);

   const table = document.getElementById("list");
   const tr = document.createElement("tr");
   console.log(table.append(tr));
  const m = Object.values(book);
   tr.innerHTML=m;

   console.log(book);


});