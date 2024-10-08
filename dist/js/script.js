

//For Navigation toggler
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-menu-list');
const headCon = document.querySelectorAll('.nav-menu-list a');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        headCon.forEach(item => item.classList.add('open'));

        showMenu = true;
    }
    else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        headCon.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

//for Scrollable Events
let anchor = document.querySelector('a');
anchor.addEventListener('click',(element)=>{
    let href = element.target.getAttribute('href');
    if (href.charAt(0) ===  "#") {
        let ehref = document.querySelector(href);
        ehref.scrollIntoView({behavior: 'smooth',block: 'start'});    
    }
    
});