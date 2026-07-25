const menuToggle = document.querySelector(".navbar-menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");
const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = navbarLinks.contains(event.target);
  const clickedOnToggle = menuToggle.contains(event.target);
  if (!clickedInsideMenu && !clickedOnToggle) {
    menuToggle.classList.remove("active");
    navbarLinks.classList.remove("active");
    overlay.classList.remove("active");
  }
});

const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
const scrollRevealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

scrollRevealElements.forEach((element) => {
  scrollRevealObserver.observe(element);
});
