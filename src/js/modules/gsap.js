import { TimelineMax } from 'gsap';
import 'RoundPropsPlugin';
// import ScrollMagic from 'ScrollMagic';
// import 'animation.gsap';
// import 'debug.addIndicators';
// import $ from "jquery";

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


let mainPage = document.getElementsByClassName('main-page');

const out = document.getElementById('out');
const TITLES = document.querySelectorAll('.fullscreen-promo_desc')
const startValue = { value: 0 },
  finishValue = document.querySelector(".js-count");


Number.prototype.numberFormat = function (decimals, dec_point, thousands_sep) {
  dec_point = typeof dec_point !== 'undefined' ? dec_point : ',';
  thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

  var parts = this.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

  return parts.join(dec_point);
}



let imagesLoop = () => {
  let index = 0;
  let images = document.getElementsByClassName("intro__images");
  setInterval(() => {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('is-show')
    }
    if(index > images.length - 1) {
      index = 0
    };
    // index = (index != images.length - 1) ? index + 1 : 0;
    images[index++].classList.add('is-show')

  }, 3000)
}



function getOffset(el) {
  let rect = el.getBoundingClientRect();
  return {
    top: rect.top,
    height: rect.top + rect.height
  }
}



const slideTime = 1.5;

let book = document.getElementById('screen1');
let dareToolkit = document.getElementById('dareToolkit');
let header = document.getElementById('header');
let entry = document.getElementById('screen2')
let intro = document.getElementById('intro')
let footer = document.getElementById('footer')
let sticky = document.querySelector('.js-sticky');
let screen1, screen2, screen22, screen3, screen4, screen5, screen6
let windowHeight = window.innerHeight;
let calcPos = () => {
  screen1 = (getOffset(header).height / 2.25);
  // screen2 = getOffset(book).height;
  if (windowHeight >= 900) { 
    screen2 = getOffset(dareToolkit).top;
    screen22 = (screen2 + 255);
  }  else {
    screen2 = getOffset(book).height;
    screen22 = (screen2 + 200);
  }
  screen3 = getOffset(entry).height;
  screen4 = getOffset(intro).top;
  screen5 = getOffset(footer).top + window.scrollY;
  screen6 = document.getElementById('out').offsetHeight - window.innerHeight;
  
}
if (mainPage.length > 0) {
  // imagesLoop();
  calcPos();
  window.addEventListener('resize', calcPos);

}



// TimelineMax
let tl1 = new TimelineMax({
  paused: true
});

tl1.defaultEase = Linear.easeInOut;

// screenSlides
let pageSlides = () => {
  tl1.addLabel('slide1')
  tl1
    .to('.header__in', 0.3, { autoAlpha: "0" }, "slide1+=0.2")
    .to('.fullscreen-bg_top', 0.7, { backgroundPosition: "0% 0" }, "slide1+=0.5")
    .fromTo('.fullscreen-title', 0.1, { autoAlpha: "0", xPercent: "-1", yPercent: "24", scale: "1.1" }, {autoAlpha: 1, xPercent:"0.2", yPercent: "25", scale: "1" }, "slide1+=0.5")
    .fromTo(TITLES[0], 0.2, { autoAlpha: "1" }, { autoAlpha: "0" }, "slide1+=0.3")
    .to(TITLES[1], 0.3, { autoAlpha: '1' }, "+=0.44")

  tl1.addLabel('slide11')
  tl1
    .to(TITLES[1], 0.3, { autoAlpha: '0' }, "+=0.44")
    .to(TITLES[2], 0.3, { autoAlpha: '1' }, "+=0.44")

  tl1.addLabel('slide2')

  tl1

    .to(out, slideTime, { y: - screen1, roundProps: "y" })

    .from('.screen', 0.4, { autoAlpha: 0 })

  tl1.addLabel('slide21')

    .to(out, slideTime, { y: - screen2, roundProps: "y" })
    .set((sticky), {
      className: '+=is-active'
    }, "slide21+=0.3")
    .from('.advantages-body_1', 0.2, {
      autoAlpha: "0"
    })

    .to('.container__2', 1.2, { x: '44%', autoAlpha: "1", ease: Linear.ease }, "slide21+=0.3")


  tl1.addLabel('slide22')
  tl1

    .to('.advantages__screen', 1.2, { x: "-50%" })
    .to('.container__1', 0.2, { autoAlpha: 0, ease: Linear.ease }, "-=0.4")
    .from('.advantages-body_2', 0.3, { autoAlpha: "0" })
  tl1.addLabel('slide23')
  tl1
    .to(out, slideTime, { y: - (screen22), roundProps: "y" })
    .from('.entry__header', 0.5, { autoAlpha: 0 })

  tl1.addLabel('slide24')
    .to(out, slideTime, { y: - (screen3 + 200), roundProps: "y" })
    .set((sticky), {
      className: '-=is-active'
    }, "slide24+=0.4")
    .from('.entry__tool', 0.7, { autoAlpha: 0, yPercent: "-5%" }, "slide24+=0.5")
    .from('.entry__body', 0.4, { autoAlpha: 0 }, "slide24+=0.6")
    .to(startValue, 1.4, {
      value: "145.315",
      onUpdate: function () {
        const nwc = startValue.value.numberFormat(3);
        finishValue.innerHTML = nwc;
      }
    }, "slide24+=0.6")
    .fromTo('.btn-primary', 0.7, { autoAlpha: 0, scale: "1.2" }, { autoAlpha: 1, scale: 1 }, "slide24+=0.9")

  tl1.addLabel('slide3')
  .add(imagesLoop, "slide3-=1")
    .to(out, slideTime, { y: - screen4, roundProps: "y"})
    .set((sticky), {
      className: '+=is-active'
    }, "slide3+=0.6")
    .from('.intro__body', 0.3, {
      autoAlpha: "0"
    })
  tl1.addLabel('slide31')
  tl1
    .to('.intro__body', 0.8, {
      y: "-200%",
      display: "none"
    }, "+=0.3")
    .fromTo('.slider', 0.8,
      {
        y: "0%",
        autoAlpha: "0"
      },
      {
        y: "-50%",
        autoAlpha: "1"
      })

    if (windowHeight >= 978) { 
      tl1.addLabel('slide5')
      .to(out, slideTime, { y: - (screen6 - 2), roundProps: "y" })
      .set((sticky), {
        className: '-=is-active'
      }, "slide5+=0.5")
      .from('.footer__in', 0.4, {
        alpha: "0",
        yPercent: "4"
      })
    tl1.addLabel('slide6')
    if(windowHeight >= 1160) {
      tl1
      .set((sticky), {
        className: '+=is-active'
      }, "slide5+=0.5")
    }

     }  else {
      tl1.addLabel('slide4')
      tl1
        .to(out, slideTime, { y: - screen5, roundProps: "y" })
        .set((sticky), {
          className: '-=is-active'
        }, "slide4+=0.5")
        .from('.footer__in', 0.4, {
          alpha: "0",
          yPercent: "4"
        })
        tl1.addLabel('slide5')
        .to(out, slideTime, { y: - screen6, roundProps: "y" })
    
      tl1.addLabel('slide6')
     }



}

const Tl = tl1;

const preloader = document.getElementById('preloader');
let tweenAvaible = true;
let tweenActive = () => tweenAvaible = true;
let tweenNotActive = () => tweenAvaible = false;

const Slides = (e) => {
  var SD = e.wheelDelta || -e.detail;
  if (!preloader.classList.contains('is-load') && tweenAvaible && SD > 0 && Tl.getLabelBefore() != null) {
    Tl.tweenTo(Tl.getLabelBefore(), {
      onStart: () => {
        tweenNotActive();
      },
      onComplete: () => {
        tweenActive();
      }
    })

  } else if (!preloader.classList.contains('is-load') && tweenAvaible && SD < 0 && Tl.getLabelAfter() != null) {
    Tl.tweenTo(Tl.getLabelAfter(), {
      onStart: () => {
        tweenNotActive();
      },
      onComplete: () => {
        tweenActive();
      }
    })

  };
};

let keyCodes = {
  UP: 38,
  DOWN: 40
}

let onKeyDown = (event) => {
  const PRESSED_KEY = event.keyCode;

  if (PRESSED_KEY == keyCodes.UP && !preloader.classList.contains('is-load') && Tl.getLabelBefore() != null) {
    Tl.tweenTo(Tl.getLabelBefore())
  }
  else if (PRESSED_KEY == keyCodes.DOWN && !preloader.classList.contains('is-load') && Tl.getLabelAfter() != null) {
    Tl.tweenTo(Tl.getLabelAfter())
  }

}

if (mainPage.length > 0) {
  const disableSlides = () => {
    document.removeEventListener('mousewheel', Slides);
    document.removeEventListener('DOMMouseScroll', Slides);
    document.removeEventListener('keydown', onKeyDown);
    window.removeEventListener("touchstart", touchStartHandler, false);
    window.removeEventListener("touchend", touchEndHandler, false);
  }
  const enableSlides = () => {
    document.addEventListener('mousewheel', Slides);
    document.addEventListener('DOMMouseScroll', Slides);
    document.addEventListener('keydown', onKeyDown);

    window.addEventListener("touchstart", touchStartHandler, false);
    window.addEventListener("touchend", touchEndHandler, false);
  }
if(isDesktop) {
  disableSlides();
  imagesLoop();
} else {
  enableSlides();
  pageSlides();
}
  // if ($(window).width() <= 1024) {
  //   disableSlides();
  // } else {
  //   enableSlides();
  //   pageSlides();
  // }
}







let touchesInAction = {};

function touchStartHandler(event) {
  let touches = event.changedTouches;

  for (let j = 0; j < touches.length; j++) {

    /* store touch info on touchstart */
    touchesInAction["$" + touches[j].identifier] = {

      identifier: touches[j].identifier,
      pageX: touches[j].pageX,
      pageY: touches[j].pageY
    };

  }
}

function touchEndHandler(event) {
  let touches = event.changedTouches;

  for (let j = 0; j < touches.length; j++) {

    /* access stored touch info on touchend */
    var theTouchInfo = touchesInAction["$" + touches[j].identifier];
    theTouchInfo.dx = touches[j].pageX - theTouchInfo.pageX;  /* x-distance moved since touchstart */
    theTouchInfo.dy = touches[j].pageY - theTouchInfo.pageY;  /* y-distance moved since touchstart */
  }
  if (!preloader.classList.contains('is-load') && tweenAvaible && theTouchInfo.dy > 0 && Tl.getLabelBefore() != null) {
    Tl.tweenTo(Tl.getLabelBefore(), {
      onStart: () => {
        tweenNotActive();
      },
      onComplete: () => {
        tweenActive();
      }
    })
  } else if (!preloader.classList.contains('is-load') && tweenAvaible && theTouchInfo.dy < 0 && Tl.getLabelAfter() != null) {
    Tl.tweenTo(Tl.getLabelAfter(), {
      onStart: () => {
        tweenNotActive();
      },
      onComplete: () => {
        tweenActive();
      }
    })

  };


}
















