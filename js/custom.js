var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        769: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 5,
          slidesPerGroup: 1,
        },
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".member-slider .swiper-button-next",
      prevEl: ".member-slider .swiper-button-prev",
    },
});


var swiper_2 = new Swiper(".hero-slider", {
  slidesPerView: 6,
  spaceBetween: 24,
  slidesPerGroup: 1,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      0: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1,
      },
    },
  navigation: {
    nextEl: ".hero-ct .swiper-button-next",
    prevEl: ".hero-ct .swiper-button-prev",
  },
});

var swiper_3 = new Swiper(".character-slider", {
  spaceBetween: 10,
  effect: "fade",
  thumbs: {
    swiper: swiper_2,
  },
});

swiper_3.allowTouchMove = false;


var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#pagescroll'
})