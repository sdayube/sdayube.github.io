const mobileMenu = document.querySelector('.nav-list .icon');
const navList = document.querySelector('.nav-list');

function menuReveal() {
  if (navList.classList.contains('responsive')) {
    navList.classList.remove('responsive');
  } else {
    navList.classList.add('responsive');
  }
}

mobileMenu.addEventListener('click', menuReveal);
