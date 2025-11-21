
// A. Typing Effect
const typingText = "IT Enthusiast";
const typingElement = document.getElementById("typing");
let i = 0;

function typeEffect() {
  if (i < typingText.length) {
    typingElement.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();



// B. Scroll To Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// C. Dark Mode Toggle
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
}



// D. Navbar Active Auto

const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});



// E. Skill Progress Animation
const skillBars = document.querySelectorAll(".fill");

function animateSkills() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

window.addEventListener("scroll", () => {
  const position = window.innerHeight;
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < position - 50) animateSkills();
  });
});



// F. Modal Certificate Animation
const modals = document.querySelectorAll(".modal");
modals.forEach(modal => {
  modal.classList.add("fade");
});
