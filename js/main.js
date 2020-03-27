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
                slidesPerView: 1,
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
                slidesPerView: 1,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 3.5,
            },
        },
    });

    var firstWidth = $('.first-slider .swiper-slide:not(.swiper-slide-duplicate)').length * 50
    var winWidth = $(window).width()

    if (firstWidth >= 850) {
        $(".first-slider .swiper-pagination-progressbar").css("width", "850px");
    } else {
        $(".first-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
    }

    if ($(window).width() <= 991) {
        if (firstWidth >= 500) {
            $(".first-slider .swiper-pagination-progressbar").css("width", "500px");
        } else {
            $(".first-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
        }
    };
    if ($(window).width() <= 767) {
        if (firstWidth >= winWidth) {
            $(".first-slider .swiper-pagination-progressbar").css("width", "100%");
        } else {
            $(".first-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
        }
    };


    var secWidth = $('.sec-slider .swiper-slide:not(.swiper-slide-duplicate)').length * 50
    var winWidth = $(window).width()

    if (secWidth >= 850) {
        $(".sec-slider .swiper-pagination-progressbar").css("width", "850px");
    } else {
        $(".sec-slider .swiper-pagination-progressbar").css("width", secWidth + "px");
    }

    if ($(window).width() <= 991) {
        if (secWidth >= 500) {
            $(".sec-slider .swiper-pagination-progressbar").css("width", "500px");
        } else {
            $(".sec-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
        }
    };
    if ($(window).width() <= 767) {
        if (secWidth >= winWidth) {
            $(".sec-slider .swiper-pagination-progressbar").css("width", "100%");
        } else {
            $(".sec-slider .swiper-pagination-progressbar").css("width", secWidth + "px");
        }
    };
});