const menuToggle = document.querySelector(".navbar-menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
