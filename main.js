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
  scrollIntoView(target);
});

//move to contact section when click contactme btn
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (e) => {
  scrollIntoView('#contact');
});

//transparent home when scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show "arrow up" btn when scroll down
const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight) {
    arrowup.classList.add('visible');
  } else {
    arrowup.classList.remove('visible');
  }
});

arrowup.addEventListener('click', () => {
  scrollIntoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeNmae == 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((prj) => {
      if (filter == '*' || filter == prj.dataset.type) {
        prj.classList.remove('hide');
      } else {
        prj.classList.add('hide');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
