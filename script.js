const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
