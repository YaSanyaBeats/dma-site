// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const teamGridSlider = new Swiper('.team__cards.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    
    grid: {
        rows: 1,
    },
    
    
    // If we need pagination
    pagination: {
        el: '.team__cards .team__dots-external',
        clickable: true
    },

    breakpoints: {
        // when window width is >= 1430px
        1430: {
            grid: {
                rows: 2,
            },
            enabled: false,
            spaceBetween: 50,
            slidesPerView: 2,
        },
        // when window width is >= 1100px
        1100: {
            grid: {
                rows: 2,
            },
            enabled: false,
            spaceBetween: 20,
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        }
    }

});

const teamCardSlider = new Swiper('.team__card.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 60,
    allowTouchMove: false,
    
    
    // If we need pagination
    pagination: {
        el: '.team__card .slider__dots',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        prevEl: '.team__card .slider__button_left',
        nextEl: '.team__card .slider__button_right',
    },

    breakpoints: {
        // when window width is >= 1100px
        1100: {
            allowTouchMove: true,
        },
        // when window width is >= 768px
        768: {
        }
    }

});