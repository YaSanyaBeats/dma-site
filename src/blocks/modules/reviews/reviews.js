// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const reviewsSlider = new Swiper('.reviews-swiper', {
    // Optional parameters
        direction: 'horizontal',
        spaceBetween: 100,
        autoHeight: true,
      
        // If we need pagination
        pagination: {
          el: '.reviews-swiper .reviews__slider-dots',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.reviews-swiper .slider__button_right',
          prevEl: '.reviews-swiper .slider__button_left',
        },
});