let myLibrary = [];

const bookDisplay = document.getElementById("bookdisplay");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    /*below lines are a test
    this.element = document.createElement("div");

    document.body.appendChild(this.element);
    this.element.innerText = "test";
    this.element.addEventListener("click", this, false);
    */
}



/*
//below function is a test
Book.prototype.handleEvent = function(e) {
    switch (e.type) {
        case "click": this.click(e);
    }
}

//below function is a test
Book.prototype.click = function(e) {
    this.element.style.color = "#F00";
    console.log(myLibrary[this])
}
*/



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
    newButton.innerText = "REMOVE"; newButton.setAttribute("onclick", "removeCard()")

    removePopup();

    console.log(document.getElementById("statusInput").value);
}

function removeCard() {
    
    console.log("TEST")

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

function hoverSelect() {
    console.log(myLibrary.length);
}

function initiateHover() {
    const select = document.querySelectorAll(".card");
    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener('mouseenter', function() {
            console.log(select[i]);
        })
        }
    }