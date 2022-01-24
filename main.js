'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//Move to section
// 메뉴를 클릭하면 클릭한 요소의 top 위치를 가져와서 scrollTo로 해당 위치로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target.dataset.link;
  if (target == null) {
    return;
  }

  const scrollTo = document.querySelector(target);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
