import {
  contactDiv,
  contactMenu,
  formMenu,
  listMenu,
  all,
  listLink,
  formLink,
} from './itemDeclarations.js';

contactDiv.addEventListener('click', () => {
  contactMenu.style.display = 'block';
  formMenu.style.display = 'none';
  listMenu.style.display = 'none';
  all.style.display = 'none';
});

listLink.addEventListener('click', () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'none';
  listMenu.style.display = 'block';
  all.style.display = 'block';
});

formLink.addEventListener('click', () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'block';
  listMenu.style.display = 'none';
  all.style.display = 'none';
});

const refresh = () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'none';
  listMenu.style.display = 'block';
  all.style.display = 'block';
};
window.onload = refresh();

export {
  contactDiv, listLink, formLink, refresh,
};