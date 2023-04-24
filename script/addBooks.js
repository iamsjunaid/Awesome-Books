// Get the form element
let form = document.getElementById('add-book-form');
let clear= document.getElementById('clear')
let addAuthor = document.getElementById('add-author') 

// Listen for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form from submitting

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;

    // Create an object with the form data
    let authorData = {
        name: name,
        author: author,
    };

    // Get the existing data from localStorage, or create an empty array
    let storedData = JSON.parse(localStorage.getItem('authorData')) || [];

    // Add the new data to the existing array
    storedData.push(authorData);

    // Save the updated data to localStorage
    localStorage.setItem('authorData', JSON.stringify(storedData));

    // Optional: display a success message
    alert('Data saved successfully!');
})

clear.addEventListener('click',(e) => {
    e.preventDefault();
    localStorage.clear();
    alert('localstorage cleared')
})

