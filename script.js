const menu = document.querySelector("#mobile-menu");
const menuItems = document.querySelectorAll(".menuitem");
const audio = new Audio("erro.mp3");

window.scrollTo(0, 0);

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

menuItems.forEach((item) => {
  item.onclick = toggleMenu;
});

document.querySelector("#skills").addEventListener("click", () => audio.play());
