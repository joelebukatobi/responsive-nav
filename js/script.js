let menuButton = document.querySelector(".menu-button");
let navItems = document.querySelector(".nav");
let header = document.querySelector(".header");
let barHide = document.querySelector(".menu-bar:nth-child(1)");
let barLeft = document.querySelector(".menu-bar:nth-child(2)");
let barRight = document.querySelector(".menu-bar:nth-child(3)");

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("toggle-nav");
  barHide.classList.toggle("hide-bar-two");
  barLeft.classList.toggle("cross-bar-one");
  barRight.classList.toggle("cross-bar-three");

  let nav = document.querySelector(".toggle-nav");

  if (nav) {
    header.style.height = "100vh";
    header.style.overflow = "hidden";
  } else {
    header.style.height = "auto";
  }
}
