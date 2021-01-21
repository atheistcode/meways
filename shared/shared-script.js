var backdrop = document.querySelector(".backdrop");

var navIcon = document.querySelector(".main-header__icon");

var nav = document.querySelector(".responsive-navigation-Wrapper");

var closeIcon = document.querySelector(".responsive-navigation__icon");

function showMenu() {
  nav.style.transform = "translateX(80vw)";
  backdrop.style.display = "block";
  closeIcon.style.display = "block";
}
navIcon.addEventListener("click", showMenu);

function closeMenu() {
  nav.style.transform = "translateX(0vw)";
  backdrop.style.display = "none";
  closeIcon.style.display = "none";
}
backdrop.addEventListener("click", closeMenu);
closeIcon.addEventListener("click", closeMenu);

const sendButton = document.getElementById("sendEmail");
sendButton.addEventListener("click", function () {
  window.alert("Unfortunately nothing will be sent. This is just a UI test.");
});
