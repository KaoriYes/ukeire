// console.log('Hello from the index.js file');
async function fetchData() {
    try {
        const response = await fetch('./data/eigenschappen.json');
        // console.log(data);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData().then(data => console.log(data.eend));





const headerButton = document.querySelector('header button');
const headerNav = document.querySelector('header nav');

headerButton.onclick = showHeaderNav;

function showHeaderNav() {
    headerNav.classList.toggle('show');
}