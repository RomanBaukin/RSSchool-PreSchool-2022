// Hamburger
const hamburger = document.querySelector('.hamburger'),
  mobileMenu = document.querySelector('.mobile-menu');

function openCloseMenu() {
  hamburger.classList.toggle('is-active');
  mobileMenu.firstElementChild.classList.toggle('blackout--active');
  mobileMenu.lastElementChild.classList.toggle('mobile-menu__items--active');
}

hamburger.addEventListener('click', openCloseMenu);

mobileMenu.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('.mobile-menu__link')) {
    openCloseMenu();
  }
})