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

const emailInput = document.querySelector("#email-input");
const subscriptionMessage = document.querySelector("#subscription-message");
const subscriptionForm = document.querySelector("#subscription-form");

subscriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    subscriptionMessage.textContent = "";
    return;
  }
  subscriptionMessage.textContent = "You have successfully subscribed!";
  subscriptionMessage.className = "subscription-message success";
});

emailInput.addEventListener("input", () => {
  subscriptionMessage.textContent = "";
});

const themeToggleButton = document.querySelectorAll(".theme-toggle");
const themeIcon = document.querySelectorAll(".theme-icon");

function updateThemeIcons() {
  themeIcon.forEach((icon) => {
    if (document.body.classList.contains("dark")) {
      icon.innerHTML = "light_mode";
    } else {
      icon.innerHTML = "dark_mode";
    }
  });
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

updateThemeIcons();

themeToggleButton.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateThemeIcons();
  });
});
