$(document).ready(function () {
    var mainswiper = new Swiper('#main-gallery', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 2500,
        effect: 'fade',
        simulateTouch: false
    });
    var firstswiper = new Swiper('#first-slider', {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        loopAdditionalSlides: 100, // slidesNum contains the initial slides number
        loopedSlides: 100,
        pagination: {
            el: '.first-slider .swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.first-slider .swiper-button-next',
            prevEl: '.first-slider .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1.2,
            },
            991: {
                slidesPerView: 3.5,
            },
        },
    });
    var secswiper = new Swiper('#sec-slider', {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        loopAdditionalSlides: 100, // slidesNum contains the initial slides number
        loopedSlides: 100,
        pagination: {
            el: '.sec-slider .swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.sec-slider .swiper-button-next',
            prevEl: '.sec-slider .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1.2,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 3.5,
            },
        },
    });
});