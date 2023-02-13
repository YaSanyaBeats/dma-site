// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const reviewsSlider = new Swiper('.reviews-swiper', {
    // Optional parameters
        loop: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        centeredSlides: true,
      
        // If we need pagination
        pagination: {
          el: '.reviews-swiper-pagination',
        },

        breakpoints: {
          1100: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 25,
          }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.reviews-swiper-button-next',
          prevEl: '.reviews-swiper-button-prev',
        },
});