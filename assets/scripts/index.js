const btnMobile = document.getElementById('btn-mobile');
const itemsMenu = document.getElementsByClassName('menu-option');

function toggleMenu(e) {
    if (e.type === 'touchstart') {
        e.preventDefault();
    }

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');


    for (var i = 0; i <= itemsMenu.length; i++) {
        itemsMenu[i].addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);