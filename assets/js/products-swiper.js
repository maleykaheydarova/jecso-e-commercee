var swiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop:true,
    speed: 1000,
    // autoplay:{
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        clickable: true,
    },
    breakpoints:{
        360:{
            slidesPerView: 1
        },
        576:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
});