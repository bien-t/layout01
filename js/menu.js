function selectMenu() {
    const menuLinks = document.querySelectorAll('.menu__navigation__link');
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', (event) => {
            event.preventDefault();
            let activeLink = document.querySelector('.menu__navigation__link .active')
            if (activeLink !== null) {
                activeLink.classList.remove('active')
            }
            event.target.classList.add('active')

            let filter = event.target.dataset.filter;
            showCategory(filter);
            hideCategory(filter)
        })
    })
}

function showCategory(filter) {
    if (filter === 'all') {
        allCategory()
    } else {
        let category = document.querySelectorAll(`.menu__item__${filter}`);
        category.forEach((item) => {
            item.style.transform = 'scale(1)';
            item.style.height = '';
            item.style.position = 'relative';
        })
    }
}

function hideCategory(filter) {
    if (filter !== 'all') {
        const category = Array.from(document.querySelectorAll('.menu__item'));
        const hiddenCategory = category.filter((element) => {
            return element.classList[1] !== `menu__item__${filter}`;
        })
        hiddenCategory.forEach((item) => {
            item.style.transform = 'scale(0)';
            item.style.height = '0';
            item.style.position = 'absolute';
        })
    }
}

function allCategory() {
    const category = document.querySelectorAll('.menu__item');
    category.forEach((item) => {
        item.style.transform = 'scale(1)';
        item.style.height = '';
        item.style.position = '';
    })
}

selectMenu()