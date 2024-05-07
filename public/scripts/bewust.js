const details = document.querySelectorAll("details");

console.log(details)

// Add the onclick listeners.
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

// Fetch all the button - summary elements.
const buttons = document.querySelectorAll("main ul li button");
// Add the onclick listeners.
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Close all details elements

        console.log(details[index])
        // Open the corresponding details element
        if (details[index].hasAttribute("open")) {
            details[index].removeAttribute("open");
        } else {
            details.forEach(detail => detail.removeAttribute("open"));
            details[index].setAttribute("open", "true");

        }
    });
});


const headerButton = document.querySelector('header button');
const headerNav = document.querySelector('header nav');

headerButton.onclick = showHeaderNav;

function showHeaderNav() {
    headerNav.classList.toggle('show');
}