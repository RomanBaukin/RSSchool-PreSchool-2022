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
      gridItems[key].style.backgroundImage = `url('./assets/img/${target.dataset['i18']}/0${+key+1}.jpg')`;
    }
  }
});

// RU/EN

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'e-mail': 'E-mail',
    'phone': 'Phone',
    'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'e-mail': 'Эл. почта',
    'phone': 'Телефон',
    'message': 'Сообщение'
  }
}

const lang = document.querySelector('.lang'),
  langItem = document.querySelectorAll('.lang__item');

function getTranslate(lang) {
  const langItem = document.querySelectorAll('[data-i18]');

  langItem.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset['i18']]

    if (elem.placeholder) {
      elem.placeholder = elem.textContent;
      elem.textContent = ''
    }
  })
}

lang.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('.lang__item--ru') || target.matches('.lang__item--en')) {
    for (let item of langItem) {
      if (item !== target) {
        item.classList.remove('lang__item--active');
      }
    }

    target.classList.add('lang__item--active');
    getTranslate(target.textContent);
  }
})

// Dark/Light Theme

const darkLightButton = document.querySelector('.dark-light-button'),
  lightThemeButtonUrl = `url('./assets/svg/light_theme.svg')`,
  darkThemeButtonUrl = `url('./assets/svg/dark_theme.svg')`;

let currentTheme = darkThemeButtonUrl;

darkLightButton.addEventListener('click', () => {
  if (currentTheme === darkThemeButtonUrl) {
    darkLightButton.style.backgroundImage = darkThemeButtonUrl;
    currentTheme = lightThemeButtonUrl;
    document.documentElement.style.setProperty('--color-black', '#fff');
    document.documentElement.style.setProperty('--color-white', '#000');
    document.documentElement.style.setProperty('--color-gold', '#000');
    document.documentElement.style.setProperty('--color-hover', '#bdae82');
  } else {
    darkLightButton.style.backgroundImage = lightThemeButtonUrl;
    currentTheme = darkThemeButtonUrl;
    document.documentElement.style.setProperty('--color-black', '#000');
    document.documentElement.style.setProperty('--color-white', '#fff');
    document.documentElement.style.setProperty('--color-gold', '#bdae82');
    document.documentElement.style.setProperty('--color-hover', '#ffffff');
  }
})


console.log('Смена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nScore 80/85');