const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');
const books = document.querySelector('.books');
const form = document.querySelector('#form');
const contactSection = document.querySelector('.contact-section');

form.classList.add('hidden');
contactSection.classList.add('hidden');
list.style.textDecoration = 'underline';

list.addEventListener('click', () => {
  list.style.textDecoration = 'underline';
  addNew.style.textDecoration = 'none';
  contact.style.textDecoration = 'none';
  form.classList.add('hidden');
  books.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

addNew.addEventListener('click', () => {
  list.style.textDecoration = 'none';
  addNew.style.textDecoration = 'underline';
  contact.style.textDecoration = 'none';
  form.classList.remove('hidden');
  books.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

contact.addEventListener('click', () => {
  list.style.textDecoration = 'none';
  addNew.style.textDecoration = 'none';
  contact.style.textDecoration = 'underline';
  form.classList.add('hidden');
  books.classList.add('hidden');
  contactSection.classList.remove('hidden');
});
