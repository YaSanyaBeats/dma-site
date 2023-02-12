// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, FreeMode]);

const blogSlider = new Swiper('.blog__swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    enabled: true,
    
    // If we need pagination
    scrollbar: {
        el: '.blog__swiper .blog__scrollbar',
    },

    breakpoints: {
        1100: {
            enabled: false,
            slidesPerView: 'auto',
        },
        768: {
            spaceBetween: 50
        }
    }

});