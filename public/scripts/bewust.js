const headerButton = document.querySelector('header button');
const headerNav = document.querySelector('header nav');

headerButton.onclick = showHeaderNav;

function showHeaderNav() {
    headerNav.classList.toggle('show');
}

// const nav = document.querySelector('#nav');
const navHome = document.querySelector('header nav ul li:nth-of-type(1) a');
const navBlog = document.querySelector('header nav ul li:nth-of-type(3) a');
const element = document.getElementById('blog');
function start(){
    navHome.removeAttribute('aria-current'); // Remove aria-current from navHome
    navBlog.setAttribute('aria-current', 'page'); // Set aria-current to 'page' for navBlog

}

start();
