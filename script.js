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
