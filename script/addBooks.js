// Get the form element
const form = document.querySelector('#add-book-form');
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById('author');
const bookList = document.getElementById('books-list');

// Get the existing data from localStorage, or create an empty array
let storedData = JSON.parse(localStorage.getItem('storedData')) || [];

let authorData = [{
  bookName: 'Mark Twain',
  bookAuthor: 'The Adventures of Tom Sawyer',
  bookNumber: 123456,
}];

const clear = document.getElementById('clear');

function newAuthorData() {
  authorData = {
    bookName: bookName.value,
    bookAuthor: bookAuthor.value,
    bookNumber: Math.floor(Math.random() * 1000000),
  };
  storedData.push(authorData);
  localStorage.setItem('storedData', JSON.stringify(storedData));
}

function deleteBook(bookNumber) {
  storedData = storedData.filter((storedData) => storedData.bookNumber !== bookNumber);
  localStorage.setItem('storedData', JSON.stringify(storedData));
}

function showBookList(authorData) {
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
}

storedData.forEach(showBookList);

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting
  if (bookName.value !== '' && bookAuthor.value !== '') {
    newAuthorData();
    showBookList(authorData);
    form.reset();
} else {
  // Optional: display a success message
  alert('Enter valid values for title and author fields, please.');
  }
});

clear.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    alert('localstorage cleared')
});
