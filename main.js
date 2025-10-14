import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

//header 滾動測試
document.addEventListener("DOMContentLoaded", function () {
  // 1. 鎖定具有滾動效果的 Header
  const header = document.querySelector(".header-main");

  // 2. 鎖定 Offcanvas (使用更精確的 ID 選擇器)
  const offcanvas = document.querySelector("#offcanvas-header-notlogin");

  // 3. 鎖定所有需要變色的連結和圖標
  const headerLinks = document.querySelectorAll(
    ".header-list a, .header-material-icon-scroll"
  );

  // *** 增加防呆檢查 ***
  // 如果 header 或 offcanvas 找不到，就停止執行滾動邏輯
  if (!header || !offcanvas) {
    console.warn("你看到我是因為你用了有底色的header，沒有什麼大問題 by-Carol");
    // 停止執行後續的 window.addEventListener
    return;
  }

  // 確保 headerLinks 是 NodeList 而不是 null (雖然 querySelectorAll 不會返回 null，但空陣列是可以接受的)
  if (headerLinks.length === 0) {
    console.warn(
      "警告：未找到 header 內的連結元素 (.header-list a / .header-material-icon-scroll)。"
    );
  }

  // --- 滾動事件監聽器 ---

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // 滾動超過 50px
      header.classList.add("scrolled");

      headerLinks.forEach((link) => {
        // 檢查這個連結是否在 offcanvas 內 (如果是 offcanvas 內的連結，就跳過不變色)
        if (offcanvas.contains(link)) {
          return;
        }
        // 外部連結從白色變為非白色 (移除 text-white)
        link.classList.remove("text-white");
      });
    } else {
      // 滾動在 50px 內 (頂部)
      header.classList.remove("scrolled");

      headerLinks.forEach((link) => {
        // 檢查這個連結是否在 offcanvas 內 (如果是 offcanvas 內的連結，就跳過)
        if (offcanvas.contains(link)) {
          return;
        }
        // 外部連結變為白色 (新增 text-white)
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
