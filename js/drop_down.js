const burger = document.querySelector(".hamburger_show");
const burgerMenu = document.querySelector(".dropdown");

const toggleDropdown = () => {
    burgerMenu.classList.toggle("dropdown_active");
    burger.classList.toggle("dropdown_active_burger");
}

burger.addEventListener('click', toggleDropdown);