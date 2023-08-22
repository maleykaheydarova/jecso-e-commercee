let mainImg=document.querySelector(".swiper-slide img");
let AllImg=document.querySelectorAll(".photobox img");
AllImg.forEach(x=>{
  x.addEventListener("click", function(e){
    mainImg.src=e.target.src;
  })
})

mainImg.addEventListener("mouseover", (e) => {
  e.target.style.transform = "scale(1.5)";
});

mainImg.addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
});

mainImg.addEventListener("mousemove", (e) => {
  const rect = mainImg.getBoundingClientRect();
  const X = (e.pageX - rect.left) / rect.width;
  const Y = (e.pageY - rect.top) / rect.height;
  const transformOrigin = X * 100 + '% ' + Y * 100 + '%';
  mainImg.style.transformOrigin = transformOrigin;
});

