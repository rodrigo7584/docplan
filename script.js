const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1201: {
      slidesPerView: 4
    },
    1400: {
      slidesPerView: 5
    }
  }
})
