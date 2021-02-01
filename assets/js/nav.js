const menuBtn = document.getElementById("menu-btn");
const menuSidebar = document.getElementById("menu-sidebar");
const navLinks = document.getElementById("nav-links");

let lastPosition = 0;
let difference = 0;
let stateLinks = true;

setInterval(() => {
  if (window.scrollY !== lastPosition) {
    difference = lastPosition - window.scrollY;
    lastPosition = window.scrollY;

    if (difference > 10) {
      navLinks.classList.remove("disable");
      stateLinks = true;
    }
    if (difference < -10) {
      navLinks.classList.add("disable");
      stateLinks = false;
    }
    if (Math.abs(difference) < 10 && stateLinks === true) {
      navLinks.classList.remove("disable");
    }
    if (Math.abs(difference) < 10 && stateLinks === false) {
      navLinks.classList.add("disable");
    }
  }
}, 100);

menuBtn.addEventListener("click", handleMenu);

function handleMenu() {
  menuSidebar.classList.toggle("active");
}
