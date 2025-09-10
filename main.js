import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

//header 滾動測試
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-main");
  const headerLinks = document.querySelectorAll(
    ".header-list a, .material-icons-outlined"
  );
  // 移除對 loginBtn 的選取，因為我們不再需要操作它
  // const loginBtn = document.querySelector('.btn-primary');

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      // 只有 header 連結和圖示變色
      headerLinks.forEach((link) => link.classList.remove("text-white"));

      // 移除這裡的程式碼，讓按鈕維持原樣
      // loginBtn.classList.remove('btn-primary');
      // loginBtn.classList.add('btn-dark');
    } else {
      header.classList.remove("scrolled");
      // 只有 header 連結和圖示恢復顏色
      headerLinks.forEach((link) => link.classList.add("text-white"));

      // 移除這裡的程式碼，讓按鈕維持原樣
      // loginBtn.classList.remove('btn-dark');
      // loginBtn.classList.add('btn-primary');
    }
  });
});
