var swiper = new Swiper(".projectSlider", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 1.3,
    },

    992: {
      slidesPerView: 2,
    },
  },
});
