const headerButton = document.querySelector('header button');
const headerNav = document.querySelector('header nav');

headerButton.onclick = showHeaderNav;

function showHeaderNav() {
    headerNav.classList.toggle('show');
}