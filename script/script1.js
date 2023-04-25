export  {
    Book,
};


export class Book {
    constructor() {
        // Get the form element
        this.form = document.querySelector('#add-book-form');
        this.bookName = document.getElementById('bookName');
        this.bookAuthor = document.getElementById('author');
        this.bookList = document.getElementById('books-list');

        // Get the existing data from localStorage, or create an empty array
        this.storedData = JSON.parse(localStorage.getItem('storedData')) || [];

        // this.authorData = [{
        //     bookName: 'Mark Twain',
        //     bookAuthor: 'The Adventures of Tom Sawyer',
        //     bookNumber: 123456,
        // }];

        this.authorData = {
            bookName: authorData.bookName.value,
            bookAuthor: authorData.bookAuthor.value,
            bookNumber: Math.floor(Math.random() * 1000000),
        };

        this.clear = document.getElementById('clear');

        console.log(this.form+""+this.bookName+""+this.bookAuthor+""+this.bookList+""+this.storedData+""+this.authorData+""+this.clear)
    }

    newAuthorData() {
        this.storedData.push(this.authorData);
        localStorage.setItem('storedData', JSON.stringify(this.storedData));
    }

    /*deleteBook(bookNumber) {
        this.storedData = this.storedData.filter((storedData) => storedData.bookNumber !== bookNumber);
        localStorage.setItem('seoredData', JSON.stringify(this.storedData));
    }

    showBookList(authorData) {
        const bookNameRow = document.createElement('tr');
        const bookAuthorRow = document.createElement('tr');
        const deleteRow = document.createElement('tr');
        const newBookName = document.createElement('td');
        const newBookAuthor = document.createElement('td');
        const deleteButton = document.createElement('button');
        newBookName.innerText = authorData.bookName;
        newBookAuthor.innerText = authorData.bookAuthor;
        deleteButton.innerHTML = 'Delete';
        bookNameRow.append(newBookName);
        bookAuthorRow.append(newBookAuthor);
        deleteRow.append(newBookName, newBookAuthor, deleteButton);
        deleteRow.classList.add('book');
        bookList.append(deleteRow);
        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.remove();
            deleteBook(authorData.bookNumber);
        });

        this.storedData.forEach(showBookList);

        // Listen for form submission
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // prevent form from submitting
            console.log(this.bookName.value+""+this.bookAuthor.value)
            if (this.bookName.value !== '' && this.bookAuthor.value !== '') {
                newAuthorData();
                showBookList(authorData);
                this.form.reset();
            } else {
                // Optional: display a success message
                alert('Enter valid values for title and author fields, please.');
            }
        });

        this.clear.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.clear();
            alert('localstorage cleared');
        }
    }); */
}




// function newAuthorData() {
//     storedData.push(authorData);
//     localStorage.setItem('storedData', JSON.stringify(storedData));
// }

// function deleteBook(bookNumber) {
//     storedData = storedData.filter((storedData) => storedData.bookNumber !== bookNumber);
//     localStorage.setItem('storedData', JSON.stringify(storedData));
// }

// function showBookList(authorData) {
//     const bookNameRow = document.createElement('tr');
//     const bookAuthorRow = document.createElement('tr');
//     const deleteRow = document.createElement('tr');
//     const newBookName = document.createElement('td');
//     const newBookAuthor = document.createElement('td');
//     const deleteButton = document.createElement('button');
//     newBookName.innerText = authorData.bookName;
//     newBookAuthor.innerText = authorData.bookAuthor;
//     deleteButton.innerHTML = 'Delete';
//     bookNameRow.append(newBookName);
//     bookAuthorRow.append(newBookAuthor);
//     deleteRow.append(newBookName, newBookAuthor, deleteButton);
//     deleteRow.classList.add('book');
//     bookList.append(deleteRow);
//     deleteButton.addEventListener('click', () => {
//         deleteButton.parentElement.remove();
//         deleteBook(authorData.bookNumber);
//     });
// }

// storedData.forEach(showBookList);

// // Listen for form submission
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // prevent form from submitting
//     if (bookName.value !== '' && bookAuthor.value !== '') {
//         newAuthorData();
//         showBookList(authorData);
//         form.reset();
//     } else {
//         // Optional: display a success message
//         alert('Enter valid values for title and author fields, please.');
//     }
// });

// clear.addEventListener('click', (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     alert('localstorage cleared');
// });
