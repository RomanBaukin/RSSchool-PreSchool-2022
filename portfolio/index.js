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

console.log('блок <header> +6\n секция hero +6\n секция skills +6\n секция portfolio +6\n секция video +6\n секция price +6\n секция contacts +6\n блок < footer > +6\n нет полосы прокрутки при ширине страницы от 1440 рх до 768 рх +5\n нет полосы прокрутки при ширине страницы от 768 рх до 480 рх +5\n нет полосы прокрутки при ширине страницы от 480 рх до 320 рх +5\n при ширине страницы 768 рх панель навигации скрывается, появляется бургер - иконка +2\n при нажатии на бургер - иконку справа плавно появляется адаптивное меню, бургер - иконка изменяется на крестик +4\n высота адаптивного меню занимает всю высоту экрана.При ширине экрана 768 - 620 рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\n при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер - иконку +4\n бургер - иконка, которая при клике превращается в крестик, создана при помощи css - анимаций без использования изображений+ 2\n ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер - иконку +4\n Score 85/85')