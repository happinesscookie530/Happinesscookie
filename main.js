import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

//header 滾動測試
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-main");
  const offcanvas = document.querySelector(".offcanvas");
  const headerLinks = document.querySelectorAll(
    ".header-list a, .header-material-icon-scroll"
  );

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      headerLinks.forEach((link) => {
        // 檢查這個連結是否在 offcanvas 內，如果是就跳過
        if (offcanvas.contains(link)) {
          return;
        }
        link.classList.remove("text-white");
      });
    } else {
      header.classList.remove("scrolled");
      headerLinks.forEach((link) => {
        // 檢查這個連結是否在 offcanvas 內，如果是就跳過
        if (offcanvas.contains(link)) {
          return;
        }
        link.classList.add("text-white");
      });
    }
  });
});

//swiper設定
const swiper = new Swiper(".hero-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
