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
  document
    .querySelector(".header-mobile__line-one")
    .classList.toggle("header-mobile__line-one--active");
  document
    .querySelector(".header-mobile__line-two")
    .classList.toggle("header-mobile__line-two--active");
  document
    .querySelector(".header-mobile__line-three")
    .classList.toggle("header-mobile__line-three--active");
});

let modaleGet = document.querySelector(".navbar__authorization");
modaleGet.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal--active");
});

let closeModal = document.querySelector(".modal__close");
closeModal.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal--active");
});

let modalMobile = document.querySelector(".header-mobile__authorization");
modalMobile.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal--active");
});

let modalMobileClose = document.querySelector(".modal__close-mobile");
modalMobileClose.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("modal--active");
});
