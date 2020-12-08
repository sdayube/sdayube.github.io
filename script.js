const barsMenu = document.querySelector('.bars-menu');
const navBar = document.querySelector('nav');
const navBarContainer = document.querySelector('header div');

const mediaQuery = window.matchMedia('(max-width: 991px)');

function navBarControl(e) {
  if (e.matches) {
    barsMenu.appendChild(navBar);
  } else {
    navBarContainer.appendChild(navBar);
  }
}

navBarControl(mediaQuery);
mediaQuery.addListener(navBarControl);

function dropDownMenu() {
  if (barsMenu.classList.contains('open')) {
    barsMenu.classList.remove('open');
    navBar.classList.remove('open');
  } else {
    barsMenu.classList.add('open');
    navBar.classList.add('open');
  }
}

barsMenu.addEventListener('click', dropDownMenu);
