function Book (title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

function UI() { }

UI.prototype.addBookList = function (book) {
const list = document.getElementById("book-list");
const row = document.createElement("tr");

row.innerHTML=`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete" >X</a></td>`

list.appendChild(row);

};


UI.prototype.clearFields = function () {
 document.getElementById("book-title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value ="";
};



document.getElementById("book-form").addEventListener("submit", (e) => {
   const title = document.getElementById("book-title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;
    
   
   const book = new Book (title, author, isbn);
   const ui = new UI ();
  ui.addBookList(book);
   ui.clearFields();


   e.preventDefault();

});
