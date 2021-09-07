const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  coverflowEffect: {
    slideShadow: false,
    rotate: 80,
    //stretch: 400,
    depth: 100,
    modifier: 8,
  },
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,

  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
