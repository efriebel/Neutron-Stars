//TOGGLE
let toggleMenuButton = document.querySelector(".toggle-menu");

//MOBILE NAV
let mobileMenu = document.querySelector(".mobile-menu-content");

//CHECKBOX
let animationCheckbox = document.querySelector(".checkbox4");


toggleMenuButton.addEventListener("click", (event)=> {
    event.preventDefault();
    animationCheckbox.checked = !animationCheckbox.checked;
    mobileMenu.classList.toggle("mobile-menu-content-transition");
});