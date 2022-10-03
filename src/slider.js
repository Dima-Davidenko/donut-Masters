let myReviewSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //   clickable: true,
    type: 'fraction',
    },
    // Navigation arrows
    navigation: {
        nextEl: ".button__next",
        prevEl: ".button__prev",
      },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 32,
            effect: 'coverflow',
            coverflowEffect: {
              rotate: 0,
              slideShadows: false,
              scale: 0.817,
              depth: 100,
            }
          },
        1280: {
          coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            scale: 0.813,
            depth: 100,
        }
        },
      },
        
      grabCursor: true,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },

    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      scale: 0.7,
      depth: 100,
    },
    // autoHeight: true,
  });
  
// conts swiper =
let myTextSlider = new Swiper('.text__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
  });

myReviewSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myReviewSlider;