// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const quotesSlider = new Swiper('.quotes__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 80,
    
    
    // If we need pagination
    pagination: {
        el: '.quotes__swiper .slider__dots',
        clickable: true
    },
    
    // Navigation arrows
    navigation: {
        prevEl: '.quotes__swiper .slider__button_left',
        nextEl: '.quotes__swiper .slider__button_right',
    },

});