const mobileSwiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let headerMobile = document.querySelector(".header-mobile__burger");
headerMobile.addEventListener("click", function () {
  document
    .querySelector(".header-mobile__layots")
    .classList.toggle("header-mobile__layots--active");
  document
    .querySelector(".header-mobile__burger")
    .classList.toggle("header-mobile__burger--active");
  document
    .querySelector(".header-mobile__link-text")
    .classList.toggle("header-mobile__link-text--active");
});
