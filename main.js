import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

//header 滾動測試
import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

//header 滾動測試
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-main");
  const offcanvas = document.querySelector(".offcanvas");
  const headerLinks = document.querySelectorAll(
    ".header-list a, .material-icons-outlined"
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
