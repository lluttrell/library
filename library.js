let myLibrary = [];
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

Book.prototype.info = function() {
	return this.title + " by " + this.author + ", " +
		this.pages + " pages, " + (this.read ? "read" : "not read yet");
}

function renderLibrary() {
    clearRendering();
    const libraryContainer = document.getElementById("library-display");
    myLibrary.forEach((element, value) => {
        const bookContainer = document.createElement("div")
        bookContainer.className = "book-container";
        bookContainer.setAttribute("data-index-number",value);
        libraryContainer.appendChild(bookContainer);
        
        const bookInfo = document.createElement("p");
        bookInfo.innerHTML = element.info();
        bookContainer.appendChild(bookInfo);
        
        const removeButton = document.createElement("button");
        removeButton.innerHTML ="remove";
        removeButton.addEventListener('click', function() {
            myLibrary.shift(value);
            renderLibrary();
        })
        bookContainer.appendChild(removeButton);
        
        const markReadButton = document.createElement("button");
        markReadButton.addEventListener('click', function() {
            element.toggleRead();
            renderLibrary();
        })
        markReadButton.innerHTML = "read";
        bookContainer.appendChild(markReadButton);
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


let returnOfTheKing = new Book("Return Of the King", "J.R.R Tolkien", 198,true);
let nineteenEighty = new Book("1984", "George Orwell", 123,true);
myLibrary.push(returnOfTheKing, nineteenEighty);
renderLibrary();
clearRendering();
renderLibrary();

