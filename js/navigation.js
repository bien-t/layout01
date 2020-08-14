function openSubmenu() {
    const submenus = getSubmenus();
    submenus.forEach((submenu) => {
        submenu.addEventListener('click', () => {
            let checkClass = submenu.children[1].classList[1] === 'navigation__subLinks--open';
            if (checkClass === false) {
                let opened = document.querySelector('.navigation__subLinks--open');
                if (opened !== null) {
                    opened.classList.remove('navigation__subLinks--open');
                }
                submenu.children[1].classList.add('navigation__subLinks--open');
                document.addEventListener('click', closeSubmenu);

            } else {
                submenu.children[1].classList.remove('navigation__subLinks--open');
                document.removeEventListener('click', closeSubmenu);
            }
        });
    })
}

function getSubmenus() {
    return document.querySelectorAll('.navigation__submenu');
}

function closeSubmenu(event) {
    let opened = document.querySelector('.navigation__subLinks--open');
    let currentTarget = event.target.classList[1] === 'navigation__mainLink__arrow';

    if (opened !== null && currentTarget === false) {
        opened.classList.remove('navigation__subLinks--open');
        document.removeEventListener('click', closeSubmenu);
    }
}


function openMobileNavigation() {
    const bar = document.querySelector('.fa-bars');
    const menuLink = document.querySelector('.navigation__links__mobile');
    bar.addEventListener('click', () => {
        menuLink.classList.toggle('navigation__links__mobile--active');
    })
    getMobileNavigationLinks();
}

function getMobileNavigationLinks() {
    const links = document.querySelectorAll('.navigation__links a');
    links.forEach((link) => {
        link.addEventListener('click', closeMobileNavigation);
    })
}

function closeMobileNavigation() {
    let temp = document.querySelector('.navigation__links__mobile--active');
    if (temp !== null) {
        temp.classList.remove('navigation__links__mobile--active');
    }
}


openSubmenu();
openMobileNavigation();