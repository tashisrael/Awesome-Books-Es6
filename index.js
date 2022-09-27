import {
  displaySection,
  addBtn,
} from './modules/itemDeclarations.js';
import { Book } from './modules/books.js';
import * as addNav from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

const availableBook = new Book();

document.addEventListener('DOMContentLoaded', () => {
  availableBook.displayItem();
});

addBtn.addEventListener('click', availableBook.addBook);
displaySection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = +e.target.getAttribute('id');
    availableBook.deleteBook(targetId);
  }
});
displaySection.addEventListener('click', addNav.addBook);
const date = DateTime.now();
document.getElementById('date').textContent = date.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);