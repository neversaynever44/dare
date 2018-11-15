// preloader
const preloader = document.getElementById('preloader');
const preloaderTitle = document.querySelector('.preloader__title');
const preloaderImg = document.querySelector('.preloader__img');
const preloaderFoot = document.querySelector('.preloader__footer');
const video = document.querySelector('.fullscreen-video');
const body = document.body;
let mainPage = document.getElementsByClassName('main-page');
let appPage = document.getElementsByClassName('app-page');
let bookPage = document.getElementsByClassName('book-page');
let tweenAvaible = true;
let tweenActive = () => tweenAvaible = true;
let tweenNotActive = () => tweenAvaible = false;
const tl = new TimelineLite({
  paused: true,
  onStart: tweenNotActive,
  onComplete: loadContent,
  ease: Power1.easeOut
})

let curWidth = window.innerWidth;
let oldWidth = window.innerWidth;
let mobileW = 480;
let isMobile = null;
isMobile = chechIfMobile(mobileW);
function chechIfMobile(width) {
  if (curWidth <= width) {
    return true
  }
  else {
    return false
  }
};



// loadContent
function loadContent() {

  let tlLoaderOut = new TimelineLite()
    .add('preloader-1')
    .to((preloaderFoot), 0.3, {
      autoAlpha: 0
    }, 'preloader-1')
    .add('preloader-2')
    .to((preloaderTitle), 0.3, {
      y: -20,
      autoAlpha: 0
    }, 'preloader-2')
    .add('preloader-3')
    .to((preloaderImg), 0.2, {
      scale: 3,
      autoAlpha: 0
    }, 'preloader-3')
    .set((preloader), {
      className: '-=is-load'
    })
  // .set(('.promo__layer'), {
  //   className: '+=is-translate'
  // }, "preloader-2+=0.5")
  // .fromTo('.promo__pic', 0.2, { scale: "1.3" }, { scale: "1" }, "preloader-2+=0.4")

  setTimeout(() => {
    body.classList.remove('is-fixed');
    out.classList.add('is-ready')

  }, 1000);
  if (!isMobile && mainPage.length > 0) {
    video.play();
  }
  tweenActive();
  return tlLoaderOut;

}
// preloaderProgress
// const preloaderProgress = () => {
//   const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//   const outer = preloader.offsetHeight;
//   if (outer > scrollTop) {
//     let windowScroll = scrollTop / outer;
//     if (windowScroll > 0) {
//       if (preloader.classList.contains('is-load')) {
//         tl.play(windowScroll);

//       }
//     }
//   }
// }
// document.addEventListener('scroll', preloaderProgress);

const preloaderProgress = () => {
  if (mainPage.length > 0 && tweenAvaible && preloader.classList.contains('is-load')) {
    tl.play();
  }
}
if (mainPage.length > 0) {
  window.addEventListener("load", () => {
    body.classList.add('is-fixed');
  })
  window.addEventListener('wheel', preloaderProgress);
  document.addEventListener("touchstart", preloaderProgress);
  document.addEventListener("keydown", preloaderProgress);

}

