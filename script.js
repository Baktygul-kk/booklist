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

UI.prototype.deleteBook = function(target) {
  if (target.className === "delete"){
    target.parentElement.parentElement.remove();

  }
}

UI.prototype.showAlert = function(msg, className){
const div = document.createElement("div");
div.className = `alert ${className}`;

div.appendChild(document.createTextNode(msg));

const container = document.querySelector(".container");
const form = document.querySelector("#book-form");

container.insertBefore(div, form);

setTimeout(function () {
  document.querySelector(".alert").remove();
}, 3000);
};



document.getElementById("book-form").addEventListener("submit", (e) => {
   const title = document.getElementById("book-title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;
    
   
   const book = new Book (title, author, isbn);
   const ui = new UI ();
   if (title === "" || author ==="" || isbn ===""){
     ui.showAlert("Please fill in all fields!", "error");
   } else {
    ui.addBookList(book);
    ui.showAlert("book added!", "success");
    ui.clearFields();
 
   }
   
   e.preventDefault();

});

document.getElementById("book-list").addEventListener('click', (e) => {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("book deleted!", "success");

  e.preventDefault();
});
