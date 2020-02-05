window.addEventListener("load", function() {  
    const form = document.getElementById("add-book-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let formData = new FormData(form);
      let book = new Book(formData.get('title'), formData.get('author'),
                        formData.get('pages'), formData.get('read'));
      myLibrary.push(book);
      renderLibrary();
    });
});

let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function() {
	return this.title + " by " + this.author + ", " +
		this.pages + " pages, " + (this.read ? "read" : "not read yet");
}

function renderLibrary() {
    clearRendering();
    const libraryContainer = document.getElementById("library-display");
    myLibrary.forEach(element => {
        const bookContainer = document.createElement("div")
        bookContainer.className = "book-container";
        bookContainer.innerHTML = element.info();
        libraryContainer.appendChild(bookContainer);
    });
}

function clearRendering() {
    while (child = document.getElementById("library-display").firstChild) {
        document.getElementById("library-display").removeChild(child);
    }
}

function toggleAddBookMenu() {
    const menuContainer = document.getElementById("add-book-form");
    menuContainer.classList.toggle("hidden-form");
}

function addBookToLibrary() {
    let name = document.getElementById("name");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    myLibrary.push(new Book(name,author,pages,read));
    clearRendering();
    renderLibrary();
}

document.getElementById("add-book-button").addEventListener('click',toggleAddBookMenu);

let returnOfTheKing = new Book("Return Of the King", "J.R.R Tolkien", 198,true);
let nineteenEighty = new Book("1984", "George Orwell", 123,true);
myLibrary.push(returnOfTheKing, nineteenEighty);
renderLibrary();
clearRendering();
renderLibrary();

