const menu = document.getElementById('menu');
addEventListener('click', function () {
    if (event.target.id === 'menu-btn') {
        menu.classList.toggle('visible');
    } else {
        menu.classList.remove('visible');
    }
});