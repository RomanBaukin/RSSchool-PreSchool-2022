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

// Tabs

const tabs = document.querySelector('.tabs'),
  tabsButtons = document.querySelectorAll('.tabs__button'),
  gridItems = document.querySelectorAll('.grid__item');

tabs.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('.tabs__button') && !target.matches('.tabs__button--active')) {
    target.classList.toggle('tabs__button--active');

    for (let item of tabsButtons) {
      if (target !== item) {
        item.classList.remove('tabs__button--active');
      }
    }

    for (let key = 0; key < 6; key++) {
      gridItems[key].style.backgroundImage = `url('./assets/img/${target.textContent.toLowerCase()}/0${+key+1}.jpg')`;
    }
  }
});