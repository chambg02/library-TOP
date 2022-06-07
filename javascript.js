let myLibrary = [];
const bookDisplay = document.getElementById("bookdisplay");

function Book() {
    // the constructor...
}

function addBookToLibrary() {

    let newBook = {
        title: document.getElementById('titleInput').value,
        author: document.getElementById('authorInput').value,
        pages: document.getElementById('pagesInput').value,
        status: document.getElementById('statusInput').checked
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
    newStatus.className = "readStatus"; 
    if (newBook.status == false) {
        newStatus.innerText = "Not Read Yet";
    } else {
        newStatus.innerText = "Read";
    }

    removePopup();

    console.log(document.getElementById("statusInput").value);
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