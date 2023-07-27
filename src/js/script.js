"use stirct";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelector("nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

const popularCardsScroll = document.querySelector(".popular__popular-cards");

popularCardsScroll.addEventListener(
  "wheel",
  function (e) {
    if (e.wheelDelta > 0) {
      this.scrollLeft -= 50;
    } else {
      this.scrollLeft += 50;
    }
  },
  { passive: true }
);

popularCardsScroll.addEventListener("wheel", (e) => {
  e.preventDefault();
});
