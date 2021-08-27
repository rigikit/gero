const swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  cubeEffect: {
    Shadow: false,
  },
  loop: true,
  speed: 1000,
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


