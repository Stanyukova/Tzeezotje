window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    popup = document.querySelector('.popups__inner'),
    callPopup = document.querySelector('.header__btn'),
    closePopup = document.querySelector('.close_popup');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });
    callPopup.addEventListener('click', () => {
        popup.classList.add('active');
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });
})