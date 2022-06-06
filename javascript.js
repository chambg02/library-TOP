let myLibrary = [];
const bookDisplay = document.getElementById("bookdisplay");

function Book() {
    // the constructor...
}

function addBookToLibrary() {

    let newBook = {
        title: document.getElementById('titleInput').value,
        author: document.getElementById('authorInput').value,
        pages: document.getElementById('pagesInput').value
    }
    myLibrary.push(newBook);
    
    let newCard = document.createElement("div");
    let newTitle = document.createElement("p");
    let newAuthor = document.createElement("p");
    let newPages = document.createElement("p");
    let newStatus = document.createElement("p");
    bookDisplay.appendChild(newCard);
    newCard.className = "card";
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newStatus);

    newTitle.className = "bookTitle"; newTitle.innerText = `${newBook.title}`;
    newAuthor.className = "bookAuthor"; newAuthor.innerText = `${newBook.author}`;
    newPages.className = "numberPages"; newPages.innerText = `${newBook.pages}`;
    newStatus.className = "readStatus"; newStatus.innerText = "Not read yet";

    document.getElementById('hiddenform').style.display = "none";
    document.getElementById('bodyContainer').style.opacity = "100%";

}

function addBookButton() {
    document.getElementById('hiddenform').style.display = "inline-block";
    document.getElementById('bodyContainer').style.opacity = "10%";
}