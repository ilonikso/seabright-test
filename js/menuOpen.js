const button = document.querySelector('.header__burger');
const nav = document.querySelector('.header__links')


button.addEventListener('click', function(){
    nav.classList.toggle('header__links--active');
});