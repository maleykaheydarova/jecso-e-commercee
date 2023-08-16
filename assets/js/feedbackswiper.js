var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop:true,
    speed: 1000,
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints:{
        576:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3
        }
    }
});