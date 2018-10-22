import 'slick-carousel';
import $ from "jquery"

const slider = $('.js-slider');
const reviewSlider = $('.js-slider-review');
// AUDIOS-SLIDERS
const releaseSlider = $('#js-slider-release');
const courageSlider = $('#js-slider-courage');
const sleepSlider = $('#js-slider-sleep');
const travelSlider = $('#js-slider-travel');

const audioMobSlider = $('#js-slider-audio');
// 
const appSlider = $('.js-slider-app');
const bootcampSlider = $('.js-slider-bootcamp');
const unitSlider = $('.js-slider-unit')

const productsSlider = $('.js-slider-products')

let curWidth = window.innerWidth;
let oldWidth = window.innerWidth;
let desktopW = 1024;
let isDesktop = null;
isDesktop = chechIfMobile(desktopW);

function chechIfMobile(width) {
  if (curWidth <= width) {
    return true
  }
  else {
    return false
  }
};


// initSlider
function initSlider(slider, options) {
  slider.on('init', function () {
    setTimeout(function () {
      slider.addClass('is-ready');
    }, 100);
  });
  slider.not('.slick-initialized').slick(options);
}
const options = {
  dots: true,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  verticalSwiping: true,
  arrows: false,
  infinite: false,
  dotsClass: "slider-dots",
  swipe: true,
  touchMove: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  adaptiveHeight: true,
  autoplay: false,
  autoplaySpeed: 5000
}

initSlider(slider, options);

const reviewOptions = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  swipe: true,
  touchMove: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true
      }
    }
  ]
}
initSlider(reviewSlider, reviewOptions);

const audioOptions = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  swipe: true,
  touchMove: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
}
const appOptions = {
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.js-prev-app',
  nextArrow: '.js-next-app',
  // adaptiveHeight: true,
  dots: true,
  dotsClass: "app-dots app-dots__feature",
  swipe: true,
  touchMove: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
}

const unitOptions = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  dotsClass: "app-dots",
  swipe: true,
  touchMove: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
}


const productsOptions = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.js-prev1',
  nextArrow: '.js-next1',
  dots: false,
  swipe: true,
  touchMove: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        dotsClass: "app-dots app-dots__products",
        slidesToShow: 2,
        arrows: false
      }
    }
  ]
}


initSlider(unitSlider, unitOptions);
initSlider(productsSlider, productsOptions);


initSlider(releaseSlider, audioOptions);
initSlider(courageSlider, audioOptions);
initSlider(sleepSlider, audioOptions);
initSlider(travelSlider, audioOptions);


initSlider(audioMobSlider, appOptions);

initSlider(appSlider, appOptions);
initSlider(bootcampSlider, appOptions);


const list = document.querySelectorAll('.audio__item');
const scene = document.querySelectorAll('.scene__list-item');
function showCurrentSlide(slider, el) {
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function () {
      let id = this.getAttribute('data-popup');
      let index = this.getAttribute('data-tab');
      let popup = document.getElementById(`${id}`);
      popup.classList.add('is-active')
      slider.slick('slickGoTo', index - 1, false);
    })
  }
}


  showCurrentSlide(releaseSlider, list);
  showCurrentSlide(courageSlider, list);
  showCurrentSlide(sleepSlider, list)
  showCurrentSlide(travelSlider, list)
// app page slider

function closePopup(btn, popup) {
  btn.addEventListener('click', function () {
    popup.classList.remove('is-active')
  })
}

if (isDesktop) {
  let tabs = document.querySelectorAll('.js-tab')
  // APP SLIDER < 1024
  let appClose = document.getElementById('appClose')
  let appPopup = document.getElementById('appsl')

  if (appSlider.length > 0) {
    closePopup(appClose, appsl)
    showCurrentSlide(appSlider, tabs)
  }
  // BOOTCAMP SLIDER < 1024
  let bootcampPopup = document.getElementById('bootcampsl')
  let bootcampClose = document.getElementById('bootcampClose')

  if (bootcampSlider.length > 0) {
    closePopup(bootcampClose, bootcampPopup)

    showCurrentSlide(bootcampSlider, tabs)
  }
  // AUDIO SLIDER < 1024
  let audioPopup = document.getElementById('audioMobSl');
  let audioClose = document.getElementById('audioClose')
  if (audioMobSlider.length > 0) {
    showCurrentSlide(audioMobSlider, tabs)
    closePopup(audioClose, audioPopup)
  }


}

// sliderHeight
let maxHeight = -1;
$('.slick-slide').each(function () {
  if ($(this).height() > maxHeight) {
    maxHeight = $(this).height();
  } else {
    $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 2) + 'px 0');
  }
});
// $('.slick-slide').each(function () {
//   if ($(this).height() < maxHeight) {
//     $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 2) + 'px 0');
//   }
// });













