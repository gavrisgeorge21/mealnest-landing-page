const menuToggle = document.querySelector(".navbar-menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
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
    threshold: 0.15,
  },
);

scrollRevealElements.forEach((element) => {
  scrollRevealObserver.observe(element);
});
