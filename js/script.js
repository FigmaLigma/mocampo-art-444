const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('hidden');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('hidden');
});


