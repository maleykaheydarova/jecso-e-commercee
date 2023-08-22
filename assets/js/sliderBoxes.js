const slides = document.querySelectorAll('.photobox')
const mainSlide = document.getElementById('swiperWrapper')

slides.forEach((photobox) => {
  photobox.addEventListener('click', () => {
      
      mainSlide.innerHTML = ''
      const selectedImage = photobox.querySelector('img').cloneNode(true)
      const swiperSlide = document.createElement('div')
      swiperSlide.className = 'swiper-slide'
      swiperSlide.appendChild(selectedImage)
      mainSlide.appendChild(swiperSlide)
  })
})