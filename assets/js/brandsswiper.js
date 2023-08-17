var swiper = new Swiper(".brandsSwiper", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        576:{
            slidesPerView:2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        }
    }
});