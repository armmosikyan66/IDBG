const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerList = document.querySelector('.header__nav');
const menu = document.querySelector('.menu');

burger.addEventListener('click', (event) => {
    event.preventDefault();
    headerList.classList.add('header__nav-active');
});

menu.addEventListener('click', (event) => {
    event.preventDefault();
    headerList.classList.remove('header__nav-active');
});

(function() {
    const header = document.querySelector('.header');
    window.onscroll =  () => {
        if(window.pageYOffset > 440) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());