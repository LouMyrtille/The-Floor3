const hamburgerButton = document.querySelector(".button-hamburger");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".hamburger-close");
const navList = document.querySelector(".nav-list");

hamburgerButton.addEventListener("click", () => {

    navList.classList.toggle("active");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

});