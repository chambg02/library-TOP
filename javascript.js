let myLibrary = [];

const bookDisplay = document.getElementById("bookdisplay");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    let title = document.getElementById('titleInput').value;
    let author = document.getElementById('authorInput').value;
    let pages = document.getElementById('pagesInput').value;
    let status = document.getElementById('statusInput').checked;
    let newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook);
    createCard(newBook);
}

function createCard(newBook) {
    let newCard = document.createElement("div");
    let newTitle = document.createElement("p");
    let newAuthor = document.createElement("p");
    let newPages = document.createElement("p");
    let newStatus = document.createElement("p");
    let newButton = document.createElement("button");

    bookDisplay.appendChild(newCard);
    newCard.className = "card";
    newCard.id = "card" + `${myLibrary.length}`;
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newStatus);
    newCard.appendChild(newButton);

    newTitle.className = "bookTitle"; newTitle.innerText = `${newBook.title}`;
    newAuthor.className = "bookAuthor"; newAuthor.innerText = `${newBook.author}`;
    newPages.className = "numberPages"; newPages.innerText = `${newBook.pages}`;
    newStatus.className = "readStatus"; 
    if (newBook.status == false) {
        newStatus.innerText = "Not Read Yet";
    } else {
        newStatus.innerText = "Read";
    }
    newButton.className = "removeButton"; newButton.id = "button" + `${myLibrary.length}`; 
    newButton.innerText = "REMOVE"; newButton.setAttribute("onclick", "removeBook(event)")

    removePopup();

    console.log(document.getElementById("statusInput").value);
}

function removeBook(e) {
    let element = e.target.parentNode;
    let lookup = element.children[0].innerText;
    myLibrary.splice(myLibrary.findIndex(x => x = lookup))
    element.remove();
}

function addBookButton() {
    document.getElementById('hiddenform').style.display = "inline-block";
    document.getElementById('bodyContainer').style.opacity = "10%";
}

function removePopup() {
    document.getElementById('hiddenform').style.display = "none";
    document.getElementById('bodyContainer').style.opacity = "100%";
    document.getElementById('titleInput').value = "";
    document.getElementById('authorInput').value = "";
    document.getElementById('pagesInput').value = "";
    document.getElementById('statusInput').checked = false;
}

function libraryLog() {
    document.getElementById('totalBooks').innerText = myLibrary.length;

    let readCounter = 0;
    for (let i = 0;i < myLibrary.length; i++) {
        if (myLibrary[i].status === true) readCounter++;
    }
    document.getElementById('totalRead').innerText = readCounter;

    let unreadCounter = 0;
    for (let j = 0;j < myLibrary.length; j++) {
        if (myLibrary[j].status === false) unreadCounter++;
    }
    document.getElementById('totalUnread').innerText = unreadCounter;
}