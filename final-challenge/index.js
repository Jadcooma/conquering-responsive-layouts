const navToggle = document.querySelector('.nav-toggle');
const navHeader = document.querySelector('.nav--header');

navToggle?.addEventListener('click', e =>
  navHeader?.classList.toggle('nav-visible')
);