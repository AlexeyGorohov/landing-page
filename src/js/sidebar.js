import { CLASS_HIDDEN, PAGE_CLASS_OPEN } from './constants';

(function () {
  const menuIcon = document.getElementById('menu'),
    sidebar = document.querySelector('.sidebar'),
    page = document.querySelector('.page'),
    html = document.getElementsByTagName('html')[0];

  const addEventClick = () => {
    document.addEventListener('click', outsideClick);
  };

  const removeEventClick = () => {
    document.removeEventListener('click', outsideClick);
  };

  const outsideClick = (e) => {
    if (sidebar.contains(e.target)) {
      return;
    }

    removeEventClick();
    page.classList.remove(PAGE_CLASS_OPEN);
    html.classList.remove(CLASS_HIDDEN);
  };

  menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();

    page.classList.toggle(PAGE_CLASS_OPEN);
    html.classList.toggle(CLASS_HIDDEN);

    if (page.classList.contains(PAGE_CLASS_OPEN)) {
      addEventClick();
    }
  });
})();
