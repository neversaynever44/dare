import 'slick-carousel';
import $ from "jquery"

const slider = $('.js-slider');
const reviewSlider = $('.js-slider-review');
const releaseSlider = $('#js-slider-release');
const courageSlider = $('#js-slider-courage');

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
  autoplay: true,
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
initSlider(releaseSlider, audioOptions);
initSlider(courageSlider, audioOptions);

function showCurrentSlide(slider) {
  const list = document.querySelectorAll('.audio__item');
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
      let id = this.getAttribute('data-popup');
      let index = this.getAttribute('data-index');
      let popup = document.getElementById(`${id}`);
      popup.classList.add('is-active')
      slider.slick('slickGoTo', index, false);
    })
  }

}

showCurrentSlide(releaseSlider);
showCurrentSlide(courageSlider);




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













