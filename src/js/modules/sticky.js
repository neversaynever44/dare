// function throttle(fn, delay) {
//   let last;
//   let timer;

//   return () => {
//     const now = +new Date;
//     if (last && now < last + delay) {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         last = now;
//         fn();
//       }, delay);
//     } else {
//       last = now;
//       fn();
//     }
//   };
// }
// const sticky = document.querySelector('.header__top')
// function stickyScroll() {
//   if (window.pageYOffset) {
//     sticky.classList.add('is-fixed');
//   } else {
//     sticky.classList.remove('is-fixed');
//   }
// }
// window.addEventListener('scroll', throttle(stickyScroll, 15));

