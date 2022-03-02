const mobileMenu = document.getElementById('mobile-nav');

document.getElementById('hamburger').onclick = function () {
  mobileMenu.style.display = 'block';
};

document.querySelectorAll('.hide-menu').forEach((element) => {
  element.onclick = function () {
    mobileMenu.style.display = 'none';
  };
});
