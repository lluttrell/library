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

function addBookToLibrary() {

}

let returnOfTheKing = new Book("Return Of the King", "J.R.R Tolkien", 198,true);
let nineteenEighty = new Book("1984", "George Orwell", 123,true);
myLibrary.push(returnOfTheKing, nineteenEighty);
renderLibrary();
clearRendering();
renderLibrary();

