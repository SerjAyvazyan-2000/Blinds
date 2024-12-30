
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');

    }


});


window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});

document.querySelectorAll('.our-works-name').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.our-works-name').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});
document.querySelectorAll('.order-agree-block').forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        }else {
            item.classList.add('active');
        }

    });
});
document.querySelector('.footer-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.querySelector('.icon-mobile-search').addEventListener('click', function () {
    const searchLabel = document.querySelector('.mobile-search-block');
    const main = document.querySelector('main');

    searchLabel.classList.toggle('active');
    main.classList.toggle('active');

});

document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.products-categories-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const subList = item.querySelector('.products-sub-list');
            if (subList && (subList.contains(event.target))) {
                return;
            }
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                // categoryItems.forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.top-menu-item');

    menuItems.forEach(item => {
        const link = item.querySelector('.top-menu-link');
        const subBlock = item.querySelector('.menu-sub-list');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            item.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!item.contains(event.target)) {
                item.classList.remove('active');
            }
        });
    });
});
