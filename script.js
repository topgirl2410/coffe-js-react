const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');


menuOpenButton.addEventListener('click', () => {
    //Toggle mobile menu visibikity
    
    document.body.classList.toggle('show-mobile-menu');
    
})

menuCloseButton.addEventListener('click', () => {
    //Toggle mobile menu visibikity
    
    document.body.classList.toggle('show-mobile-menu');
    
})