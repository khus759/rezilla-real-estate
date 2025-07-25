// // js/property.js
// export function initPropertySwiper() {
//   const initSwiper = (el) => {
//     return new Swiper(el, {
//       loop: true,
//       speed: 5000,
//       autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//       },
//       slidesPerView: 1.2,
//       spaceBetween: 20,
//       grabCursor: true,
//       breakpoints: {
//         576: { slidesPerView: 1.2 },
//         768: { slidesPerView: 2 },
//         992: { slidesPerView: 3 }
        
//       }
//     });
//   };

//   document.querySelectorAll('.propertySwiper').forEach((swiperEl) => {
//     if (swiperEl.closest('.tab-pane.active')) {
//       if (!swiperEl.swiper) initSwiper(swiperEl);
//     }
//   });

//   document.querySelectorAll('[data-bs-toggle="pill"]').forEach((tab) => {
//     tab.addEventListener('shown.bs.tab', (e) => {
//       const targetId = e.target.getAttribute('data-bs-target');
//       const swiperEl = document.querySelector(`${targetId} .propertySwiper`);
//       if (swiperEl && !swiperEl.swiper) {
//         initSwiper(swiperEl);
//       }
//     });
//   });
// }





export function initPropertySwiper() {
  const initSwiper = (el) => {
    return new Swiper(el, {
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      slidesPerView: 1.2,
      spaceBetween: 20,
      grabCursor: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });
  };

  document.querySelectorAll('.propertySwiper').forEach((swiperEl) => {
    if (swiperEl.closest('.tab-pane.active')) {
      if (!swiperEl.swiper) initSwiper(swiperEl);
    }
  });

  document.querySelectorAll('[data-bs-toggle="pill"]').forEach((tab) => {
    tab.addEventListener('shown.bs.tab', (e) => {
      const targetId = e.target.getAttribute('data-bs-target');
      const swiperEl = document.querySelector(`${targetId} .propertySwiper`);
      if (swiperEl && !swiperEl.swiper) {
        initSwiper(swiperEl);
      }
    });
  });
}
