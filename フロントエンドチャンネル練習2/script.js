const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  speed: 1000,
  loop: true,

  autoplay: {
    delay: 2500
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
