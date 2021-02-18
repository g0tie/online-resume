const menu = document.querySelector("#mobile-menu");
const menuItems = document.querySelectorAll(".menuitem");
const audio = new Audio("erro.mp3");

location.hash = "general-title";
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
document.querySelectorAll(".link-bloc").forEach((el) => {
  el.addEventListener(
    "mouseover",
    () => (el.style = " box-shadow: 8px 8px 0 #141cff;")
  );
  el.addEventListener(
    "mouseleave",
    () => (el.style = " box-shadow: 8px 8px 0 rgb(0,0,0,0.4)")
  );
});
