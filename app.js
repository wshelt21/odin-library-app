let myLibrary = [];

// add button
const addButton = document.querySelector('.add-btn');

// modal
const modal = document.getElementById("modal");

// close
const span = document.getElementsByClassName("close")[0];

// grid
const grid = document.querySelector('.book-grid');


function Book() {
    // the constructor...

}

function addBookToLibrary() {
    // do stuff here




    // create New book div
    addButton.addEventListener('click', function () {
        modal.style.display = "block";

        // **create book spine div**
        // const newBook = document.createElement("div");
        // grid.appendChild(newBook);
        // newBook.classList.add("book-spine");

    })
}

span.onclick = function () {
    modal.style.display = "none";
}

addBookToLibrary();
