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

const portfolioArray = Object.keys(portfolioObjects);
