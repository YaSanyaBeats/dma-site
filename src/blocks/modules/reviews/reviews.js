// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const reviewsSlider = new Swiper('.reviews-swiper', {
    // Optional parameters
        direction: 'horizontal',
      
        // If we need pagination
        pagination: {
          el: '.reviews-swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.reviews-swiper-button-next',
          prevEl: '.reviews-swiper-button-prev',
        },
});