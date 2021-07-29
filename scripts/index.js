'use strict'

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}

let progressLine = document.getElementById('progress__line');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let widthProgressLine = windowScroll / windowHeight * 100;

    progressLine.style.width = widthProgressLine + '%';
}

window.onscroll = () => {
    const header = document.querySelector('.header');
    const menuLink = document.querySelectorAll('.menu__link');

    const Y = window.scrollY;

    if (Y > 200) {
        header.classList.add('header__fixed');
        if (document.documentElement.clientWidth > 860) {
            for (let i = 0; i < menuLink.length; i++) {
                menuLink[i].classList.add('menu__listBlack');
            }
        }
    } else {
        header.classList.remove('header__fixed');
        for (let i = 0; i < menuLink.length; i++) {
            menuLink[i].classList.remove('menu__listBlack');
        }
    }
}


const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuAdaptiveIcon = document.getElementById('menuAdaptiveIcon');
const menuLink = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', switchMenu);
}

menuAdaptiveIcon.addEventListener('click', switchMenu);

function switchMenu() {
    menu.classList.toggle('d-none');
    header.classList.toggle('mobile-header');
}

const anim = document.querySelectorAll('.anim');

window.addEventListener('scroll', showVisible);


function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {
    for (let i = 0; i < anim.length; i++) {
        if (isVisible(anim[i])) {
            anim[i].classList.add('anim_skill');
        } else {
            anim[i].classList.remove('anim_skill');
        }
    }
}
