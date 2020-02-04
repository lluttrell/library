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

document.getElementById("add-book-button").addEventListener('click',toggleAddBookMenu);


function renderLibrary() {
    const libraryContainer = document.getElementById("library-display");
    myLibrary.forEach(element => {
        const bookContainer = document.createElement("div")
        bookContainer.className = "book-container";
        bookContainer.innerHTML = element.info();
        libraryContainer.appendChild(bookContainer);
    });
}

function toggleAddBookMenu() {
    const menuContainer = document.getElementById("add-book-form");
    menuContainer.classList.toggle("hidden-form");
}


function clearRendering() {
    while (child = document.getElementById("library-display").firstChild) {
        document.getElementById("library-display").removeChild(child);
    }
}

function addBookToLibrary() {

}

let returnOfTheKing = new Book("Return Of the King", "J.R.R Tolkien", 198,true);
let nineteenEighty = new Book("1984", "George Orwell", 123,true);
myLibrary.push(returnOfTheKing, nineteenEighty);
renderLibrary();
clearRendering();
renderLibrary();

