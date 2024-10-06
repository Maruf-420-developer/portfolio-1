const nav_menu = document.querySelector(".menu");
const nav_header = document.querySelector("header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

nav_menu.addEventListener("click", () => toggleNavbar());
