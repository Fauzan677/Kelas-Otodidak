$(document).ready(()=>{
    $(document).scroll(()=>{
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
    })
})

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});

var swiper = new Swiper(".mySwiperCourse", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
      },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
       
    }
  });

