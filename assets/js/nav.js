const menuBtn = document.getElementById("menu-btn");
const menuSidebar = document.getElementById("menu-sidebar");

menuBtn.addEventListener("click", handleMenu);

function handleMenu() {
  menuSidebar.classList.toggle("active");
}
