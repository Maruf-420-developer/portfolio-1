const nav_menu = document.querySelector(".menu");
const nav_header = document.querySelector("header");
const nav_links = document.getElementsByClassName("nav_link");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

nav_menu.addEventListener("click", () => toggleNavbar());

for (const navLink of nav_links) {
  navLink.addEventListener("click", () => {
    nav_header.classList.toggle("active");
  });
}
