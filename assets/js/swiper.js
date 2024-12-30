let possibilitiesSwiper = new Swiper(".affordable-swiper", {
    spaceBetween: 20,
    slidesPerView: 5,

    navigation: {
        nextEl: '.affordable-next',
    },

    breakpoints: {
        320: {slidesPerView: 3,},
        400: {slidesPerView: 4, spaseBetween: 10,},
        576: {slidesPerView: 4},
        629: {slidesPerView: 4},
        855: {slidesPerView: 5},
    },


});


let cardSliderItem = new Swiper(".card-slider-item", {
    freeMode: true,
    watchSlidesProgress: true,
    spaseBetween: 10,

    breakpoints: {
        320: {slidesPerView: 3, spaseBetween: 10,},
        576: {slidesPerView: 3},
        629: {slidesPerView: 4},
        1005: {slidesPerView: 4},
        1920: {slidesPerView: 2.9},

    },

});
let cardSliderItems = new Swiper(".card-slider-items", {
    spaceBetween: 10,
    slidesPerView: 1,

    thumbs: {
        swiper: cardSliderItem,
    },
});
