var workItem = document.querySelectorAll(
  ".work-section__portfolio-wrapper__item"
);

var workItemOverlay = document.querySelectorAll(
  ".work-section__portfolio-wrapper__item__overlay"
);

var workItemOverlayDiv = document.querySelectorAll(
  ".work-section__portfolio-wrapper__item__overlay>div"
);

for (let i = 0; i < workItem.length; i++) {
  workItem[i].addEventListener("click", workAnimation);
  function workAnimation() {
    workItem[i].classList.toggle("effect-1");
    workItemOverlay[i].classList.toggle("effect-2");
    workItemOverlayDiv[i].classList.toggle("effect-3");
    // workItemOverlayDiv[i].style.height = "2rem";
  }
}
