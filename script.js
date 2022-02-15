// Mobile Menu
const mobileMenu = document.getElementById('mobile-nav');

document.getElementById('hamburger').onclick = function () {
  mobileMenu.style.display = 'block';
};

document.querySelector('.close').onclick = function () {
  mobileMenu.style.display = 'none';
};

document.querySelector('.header-menu-li-mobile-first').onclick = function () {
  mobileMenu.style.display = 'none';
};

document.querySelector('.header-menu-li-mobile-second').onclick = function () {
  mobileMenu.style.display = 'none';
};

document.querySelector('.header-menu-li-mobile-third').onclick = function () {
  mobileMenu.style.display = 'none';
};

//Portfolio Objects Object
const portfolioObjects = {
  portfolioObject1: {
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
  portfolioObject2: {
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
  portfolioObject3: {
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
  portfolioObject4: {
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
};

//Portfolio Generator
const portfolioArray = Object.keys(portfolioObjects);

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
  portfolioImage.classList.add('portfolio-img');
  portfolioRight.classList.add('portfolio-right');
  portfolioHeading.classList.add('portfolio-heading');
  portfolioList.classList.add('portfolio-list');
  portfolioText.classList.add('portfolio-text');
  portfolioLanguages.classList.add('portfolio-languages');

  portfolioHeading.textContent = portfolioObjects[object].heading;
  portfolioList.innerHTML = portfolioObjects[object].subheading;
  portfolioImage.src = portfolioObjects[object].image;
  portfolioText.textContent = portfolioObjects[object].shortDescription;
  portfolioLanguages.innerHTML = portfolioObjects[object].languages;
  portfolioButton.textContent = portfolioObjects[object].seeProjectButton;
  // Portfolio Modal Generator
  portfolioButton.addEventListener('click', () => {
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

    h2.textContent = portfolioObjects[object].heading;
    subheading.innerHTML = portfolioObjects[object].subheading;
    image.src = portfolioObjects[object].image;
    description.textContent = portfolioObjects[object].description;
    languages.innerHTML = portfolioObjects[object].languages;
    source.href = portfolioObjects[object].source;
    source.textContent = 'Source';
    liveVersion.href = portfolioObjects[object].liveVersion;
    liveVersion.textContent = 'Live Site';
    close.textContent = 'x';
    close.classList.add('close');
    close.addEventListener('click', () => {
      const popupDiv = document.querySelector('.popupdiv');
      document.body.removeChild(popupDiv);
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
});

//Form Check If Valid Email
const form = document.getElementById('form');
const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formMessage = document.getElementById('form-message');
let errorMessage = document.querySelector('.error-message')

const checkEmail = /^[a-z0-9@.]+$/;

form.addEventListener('submit', function (event) {
  if (checkEmail.test(formEmail.value) === false) {
    event.preventDefault()
    errorMessage.textContent = 'Please only use lower case letters in your email';
  }
});
formArray.forEach(formInput => {
  formInput.addEventListener('input', function(data) {
    addData(this);
  })
});

function addData(data) {
  formObj[data.name] = data.value
  stringifiedObject = JSON.stringify(formObj)
  localStorage.setItem('formData', stringifiedObject);
}