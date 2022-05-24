// Mobile Menu
const mobileMenu = document.getElementById('mobile-nav');

document.getElementById('hamburger').onclick = function () {
  mobileMenu.style.display = 'block';
};

document.querySelectorAll('.hide-menu').forEach((element) => {
  element.onclick = function () {
    mobileMenu.style.display = 'none';
  };
});

const portfolioArray = [
  {
    heading: 'Tonic',
    subheading:
      '<li class="portfolio-list-first">Canopy</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">Back End Dev</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">2022</li>',
    image: 'images/Portfolio-screenshot1.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized readsA daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads of privately personalized reads; no accounts or sign-ups required. ',
    languages:
      '<li class="language-text">html</li> <li class="language-text">css</li> <li class="language-text">javascript</li>',
    seeProjectButton: 'See Project',
    source: 'github.com',
    liveVersion: 'github.com',
  },
  {
    heading: 'Multi-Post Stories',
    subheading:
      '<li class="portfolio-list-first">Canopy</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">Back End Dev</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">2022</li>',
    image: 'images/Portfolio-screenshot2.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized readsA daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads of privately personalized reads; no accounts or sign-ups required. ',
    languages:
      '<li class="language-text">html</li> <li class="language-text">css</li> <li class="language-text">javascript</li>',
    seeProjectButton: 'See Project',
    source: 'github.com',
    liveVersion: 'github.com',
  },
  {
    heading: 'Talk Type All',
    subheading:
      '<li class="portfolio-list-first">Canopy</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">Back End Dev</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">2022</li>',
    image: 'images/Portfolio-screenshot3.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized readsA daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads of privately personalized reads; no accounts or sign-ups required. ',
    languages:
      '<li class="language-text">html</li> <li class="language-text">css</li> <li class="language-text">javascript</li>',
    seeProjectButton: 'See Project',
    source: 'github.com',
    liveVersion: 'github.com',
  },
  {
    heading: 'Say Much Self',
    subheading:
      '<li class="portfolio-list-first">Canopy</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">Back End Dev</li> <li class="portfolio-list-dot"></li> <li class="portfolio-list-secondary">2022</li>',
    image: 'images/Portfolio-screenshot4.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized readsA daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads A daily selection of privately personalized reads of privately personalized reads; no accounts or sign-ups required. ',
    languages:
      '<li class="language-text">html</li> <li class="language-text">css</li> <li class="language-text">javascript</li>',
    seeProjectButton: 'See Project',
    source: 'github.com',
    liveVersion: 'github.com',
  },
];

let i = 0;
portfolioArray.forEach((object) => {
  const header = document.querySelector('.header');
  const portfolioFlex = document.createElement('section');
  const portfolioImage = document.createElement('img');
  const portfolioRight = document.createElement('div');
  const portfolioHeading = document.createElement('h2');
  const portfolioList = document.createElement('ul');
  const portfolioText = document.createElement('p');
  const portfolioLanguages = document.createElement('ul');
  const portfolioButton = document.createElement('button');

  portfolioFlex.classList.add('portfolio-flex');
  if (i % 2 === 0) {
    portfolioFlex.classList.add('portfolio-flex-row');
  } else {
    portfolioFlex.classList.add('portfolio-flex-row-reverse');
  }
  portfolioImage.classList.add('portfolio-img');
  portfolioRight.classList.add('portfolio-right');
  portfolioHeading.classList.add('portfolio-heading');
  portfolioList.classList.add('portfolio-list');
  portfolioText.classList.add('portfolio-text');
  portfolioLanguages.classList.add('portfolio-languages');

  portfolioHeading.textContent = object.heading;
  portfolioList.innerHTML = object.subheading;
  portfolioImage.src = object.image;
  portfolioText.textContent = object.shortDescription;
  portfolioLanguages.innerHTML = object.languages;
  portfolioButton.textContent = object.seeProjectButton;
  portfolioButton.addEventListener('click', () => {
    document.querySelector('.header').classList.remove('header-fixed');

    const popupDiv = document.createElement('div');
    const divContainer = document.createElement('div');
    const topBar = document.createElement('div');
    const h2 = document.createElement('h2');
    const close = document.createElement('span');
    const subheading = document.createElement('ul');
    const image = document.createElement('img');
    const bottomFlex = document.createElement('div');
    const rightBottomFlex = document.createElement('div');
    const description = document.createElement('p');
    const buttons = document.createElement('div');
    const languages = document.createElement('ul');
    const line = document.createElement('hr');
    const source = document.createElement('button');
    const liveVersion = document.createElement('button');

    popupDiv.classList.add('popupdiv');
    divContainer.classList.add('div-container');
    topBar.classList.add('portfolio-top-bar');
    h2.classList.add('portfolio-h2');
    subheading.classList.add('subheading');
    image.classList.add('popup-image');
    bottomFlex.classList.add('popup-bottom-flex');
    rightBottomFlex.classList.add('rightbottomflex');
    description.classList.add('description');
    buttons.classList.add('popup-buttons');
    languages.classList.add('languages');
    line.classList.add('line');
    liveVersion.classList.add('liveVersion');

    h2.textContent = object.heading;
    subheading.innerHTML = object.subheading;
    image.src = object.image;
    description.textContent = object.description;
    languages.innerHTML = object.languages;
    source.href = object.source;
    source.textContent = 'Source';
    liveVersion.href = object.liveVersion;
    liveVersion.textContent = 'Live Site';
    close.textContent = 'x';
    close.classList.add('close');
    close.addEventListener('click', () => {
      const popupDiv = document.querySelector('.popupdiv');
      document.body.removeChild(popupDiv);
      document.querySelector('.header').classList.add('header-fixed');
    });

    popupDiv.append(divContainer);
    divContainer.append(topBar, subheading, image, bottomFlex);
    topBar.append(h2, close);
    bottomFlex.append(description, rightBottomFlex);
    rightBottomFlex.append(languages, line, buttons);
    buttons.append(source, liveVersion);
    document.body.insertBefore(popupDiv, header);
  });

  portfolioFlex.append(portfolioImage, portfolioRight);
  portfolioRight.append(
    portfolioHeading,
    portfolioList,
    portfolioText,
    portfolioLanguages,
    portfolioButton,
  );
  document.body.querySelector('#portfolio').append(portfolioFlex);
  i += 1;
});

// Form Check If Valid Email
const form = document.getElementById('form');
const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formMessage = document.getElementById('form-message');
const errorMessage = document.querySelector('.error-message');

const checkEmail = /^[a-z0-9@.]+$/;

form.addEventListener('submit', (event) => {
  if (checkEmail.test(formEmail.value) === false) {
    event.preventDefault();
    errorMessage.textContent = 'Please only use lower case letters in your email';
  }
});

// Form Local Storage
const formObj = {};
let stringifiedObject = '';
let parsedObject = {};
const formArray = [formName, formEmail, formMessage];

function addData(data) {
  formObj[data.name] = data.value;
  stringifiedObject = JSON.stringify(formObj);
  localStorage.setItem('formData', stringifiedObject);
}

// Check For And Add Saved Data
if (localStorage.getItem('formData')) {
  parsedObject = JSON.parse(localStorage.getItem('formData'));
  formName.value = parsedObject.name;
  formEmail.value = parsedObject.email;
  formMessage.value = parsedObject.message;
  addData(formName);
  addData(formEmail);
  addData(formMessage);
}

formArray.forEach((formInput) => {
  formInput.addEventListener('input', function () {
    addData(this);
  });
});