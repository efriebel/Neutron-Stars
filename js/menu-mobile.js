//OPEN
const openButton = document.querySelector(".open-menu");
console.log("open button", openButton)

//CLOSE
const closeButton = document.querySelector(".close-menu");

//MOBILE NAV
const mobileMenu = document.querySelector(".mobile-menu-content");


openButton.addEventListener("click", ()=> {
    mobileMenu.classList.add("mobile-menu-content-transition");
    //openButton.classList.remove("show-mobile");
    //mobileMenu.classList.add("show-mobile");
    //mobileMenu.classList.add("mobile-menu-content-display");
});

closeButton.addEventListener("click", ()=> {
    mobileMenu.classList.remove("mobile-menu-content-transition");
    //openButton.classList.add("show-mobile");
    //mobileMenu.classList.remove("show-mobile");
});

