require('intersection-observer');
import $ from "jquery"


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
let mainPage = document.getElementsByClassName('main-page')


// if (bookPage.length > 0) {
IntersectionObserver.prototype.POLL_INTERVAL = 100; // Time in milliseconds.
//init observers
let intersectionOptions = {
  threshold: [.5]
};

// book-page
let testimonial = document.getElementById('testimonial')
let reviews = document.getElementById('reviews')
let app = document.getElementById('app')
// app-page
let feature = document.getElementById('feature')

// audio-page
let program = document.getElementById('program');
let technology = document.getElementById('technology');

// all-page
let promo = document.getElementById('promo')
let plus = document.getElementById('plus')
let freedom = document.getElementById('freedom')
let stats = document.getElementById('stats')
let footer = document.getElementById('footer')



let screenAnimationsObservers = [];
let screenAnimations = [
  animate1Screen,
  animateBook,
  animateStats,
  animate4Screen,
  animateFooter,
  animateReviews,
  animateTestimonial,
  animateApp,
  animateProgram,
  animateTechnology

];

let screenAnimationsAnchors = [
  promo,
  freedom,
  stats,
  feature,
  footer,
  reviews,
  testimonial,
  app,
  program,
  technology
];


function onEntry(count, entry) {

  entry.forEach((change) => {
    console.log(change)
    if (
      change.isIntersecting
      &&
      change.intersectionRatio >= 0.4
    ) {
      screenAnimations[count]();
      screenAnimationsObservers[count].unobserve(entry[0].target);
    }
  });
};

if (!isMobile) {
  for (let i = 0; i < screenAnimations.length; i++) {
    if (screenAnimationsAnchors[i]) {
      screenAnimationsObservers[i] = new IntersectionObserver(entries => {
        onEntry(i, entries)
      }, intersectionOptions);
      screenAnimationsObservers[i].observe(screenAnimationsAnchors[i])

    }
  };
  setStartAnimationPos();

}
function setStartAnimationPos(params) {
  let tl = new TimelineMax();
  tl
    .set('.freedom, .feature__title, .scene__body, .scene__tabs, .feature__footer, .feature__dots, .footer__in, .testimonial__in, .reviews, .app, .program__in', { alpha: 0 })
}


function animate1Screen() {

  let tl = new TimelineMax();
  tl
    .addLabel('layer')
    .set(('.promo__layer'), {
      className: '+=is-translate'
    }, "layer")
    // .fromTo('.promo__layer', 0.6, { yPercent: -150 }, { yPercent: 0 }, "layer")
    .add('book')
    .to('.promo__pic', 0.2, { scale: 1, alpha: 1 }, "book")
    // .fromTo('.promo__pic', 0.2, { scale: "1.33", alpha: "0" }, { scale: "1", alpha: "1" }, "mob-2+=0.1")
    // .to('.promo__pic', 0.2, { scale: "1", alpha: "1" }, "mob-2")
    .to('.promo__scroll', 0.2, { alpha: "1" }, "layer+=0.2")
}
// function animate2Screen() {

//   let tl = new TimelineMax();
//   tl
//     .addLabel('scroll')
//     .to('.promo__scroll', 0.2, { alpha: "0" })
//     .set(('.promo__pic'), {
//       className: '+=is-scroll'
//     })

//     .to('.plus', 0.2, { alpha: "1" }, "scroll+=0.5")
// }

// animateHeadline($('.cd-headline'));
function animateBook() {

  let tl = new TimelineMax();
  tl
    .to('.freedom', 0.4, { alpha: "1" })
    .addLabel('scene')
    .fromTo('.freedom__book', 1, { alpha: "0", xPercent: "50" }, { alpha: "1", xPercent: "0" }, "scene-=0.2")
}

function animateStats() {
  const startValue0 = { value: 0 },
    startValue1 = { value: 0 },
    startValue2 = { value: 0 },
    statsItems = document.querySelectorAll('.stats__item'),
    finishValue = document.querySelectorAll(".stats__num");

  Number.prototype.numberFormat = function (decimals, dec_point, thousands_sep) {
    dec_point = typeof dec_point !== 'undefined' ? dec_point : ',';
    thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

    var parts = this.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

    return parts.join(dec_point);
  }

  let tl = new TimelineMax();
  tl
    .addLabel('stats-1')
    .to(stats, 0.3, {
      alpha: 1
    }, 'stats-1')
    .to((statsItems[0]), 0.3, {
      alpha: 1
    }, 'stats-1')
    .to(startValue0, 1.5, {
      value: "50.409",
      onUpdate: function () {
        const nwc = startValue0.value.numberFormat(3);
        finishValue[0].innerHTML = nwc;
      }
    }, "stats-1")

    .addLabel('stats-2')
    .to((statsItems[1]), 0.3, {
      alpha: 1
    }, 'stats-2')
    .to(startValue1, 1.5, {
      value: "38.506",
      onUpdate: function () {
        const nwc = startValue1.value.numberFormat(3);
        finishValue[1].innerHTML = nwc;
      }
    }, "stats-2")

    .addLabel('stats-3')
    .to((statsItems[2]), 0.3, {
      alpha: 1
    }, 'stats-3')
    .to(startValue2, 1.5, {
      value: "56.400",
      onUpdate: function () {
        const nwc = startValue2.value.numberFormat(3);
        finishValue[2].innerHTML = nwc;
      }
    }, "stats-3")
    .add('stats-4')

    // .to('.stats__bg', 0.4, {
    //   alpha: 0
    // }, 'stats-4+=0.3')
    // .set(('.stats__list'), {
    //   className: '+=stats__list-purple'
    // }, "stats-4+=0.4")
    // .to(".stats__book", 0.2, {
    //   paddingBottom: "0"
    // }, 'stats-4+=0.2')

    .to('.stats__bg', 0.6, {
      alpha: "0"
    }, 'stats-2')
    .set(('.stats__list'), {
      className: '+=stats__list-purple'
    }, "stats-2")
    .to(".stats__book", 0.4, {
      paddingBottom: "0"
    }, 'stats-2+=0.1')



};
function animate4Screen() {
  let tl = new TimelineMax()
  tl
    .add('feature-1')
    .to('.feature', 0.3, {
      alpha: 1
    }, "feature-1")
    .to('.feature__title', 0.3, {
      alpha: 1
    }, "feature-1")
    .addLabel('feature-2')
    .to('.scene__body', 0.3, {
      alpha: 1
    }, "feature-2")
    .addLabel('feature-3')
    .to('.scene__tabs', 0.3, {
      alpha: 1
    }, "feature-3")
    .addLabel('feature-4')
    .to('.feature__dots', 0.3, {
      alpha: 1
    }, "feature-4")
    .addLabel('feature-5')
    .to('.feature__footer', 0.3, {
      alpha: 1
    }, "feature-5")
}

function animateFooter() {
  if (!mainPage.length) {
    let tl = new TimelineMax()
    tl.defaultEase = Linear.easeInOut;

    tl
      .add('footer')
      .fromTo('.footer__in', 0.6, { alpha: "0", y: "30" }, { alpha: "1", y: "0" }, "footer")
  }
}

// book-page
function animateReviews() {
  let tl = new TimelineMax();
  tl
    .to(reviews, 0.2, { alpha: 1 }, "+=0.4")

}
function animateTestimonial() {
  let tl = new TimelineMax();
  tl
    .add('testimonial')
    .to('.testimonial__in', 0.2, { alpha: 1 }, "testimonial")
}
function animateApp() {
  let appList = document.querySelectorAll('.app__list-item');
  let tl = new TimelineMax();
  tl
    .add('app')
    .to('.app', 0.2, { alpha: 1 }, "app")
    .fromTo('.app__phone', 1.4, { alpha: "0", xPercent: "50" }, { alpha: "1", xPercent: "0" }, "app+=0.3")
  for (let i = 0; i < appList.length; i++) {
    let li = appList[i];
    let delay = 0.1 + i * 0.5;
    tl
      .to(li, 0.2, { alpha: 1 }, delay)
  }
}
function animateProgram() {
  let tl = new TimelineMax();
  tl
    .to('.program__in', 0.2, { alpha: 1 })
}
function animateTechnology(params) {
  let tl = new TimelineMax();
  tl
    // .to('.technology__list, .technology__btns', 0.2, { alpha: 1 })
    .add('background')
    .to('.program__layer', 1, { height: "180%" }, "background+=0.5")
    // .to('.program__bg', 0.9, { height: "180%" }, "background+=0.5")
    // .to('.program__bottom', 0.9, { top: "180%" }, "background+=0.5")
    .set(('.technology__list'), {
      className: '+=technology__list-wh'
    }, "background+=0.5")
    .set(('.btn-primary'), {
      className: "-=btn-program"
    }, "background+=0.5")
}

// scroll phone to section
const animationDelay = 2500;
let scroll = false;
let pageY;

if (plus) {
  var plusOffset = plus.offsetTop;
  var pl = plusOffset / 1.5;

}

let promoPic = document.querySelector('.promo__pic');
let promoScroll = document.querySelector('.promo__scroll');
function slidePhone() {
  promoScroll.classList.add('is-hidden')
  promoPic.classList.add('is-scroll')
}

window.addEventListener('scroll', function () {
  pageY = window.pageYOffset;


  if (!scroll && pageY > pl) {
    scroll = true
    slidePhone();
    animateHeadline($('.cd-headline'));
  }
})

// animate words 
function animateHeadline($headlines) {
  $headlines.each(function () {
    var headline = $(this);
    //trigger animation
    setTimeout(function () { hideWord(headline.find('.is-visible')) }, animationDelay);
    //other checks here ...
  });
}
function hideWord($word) {
  var nextWord = takeNext($word);
  switchWord($word, nextWord);
  setTimeout(function () { hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-visible').addClass('is-hidden');
  $newWord.removeClass('is-hidden').addClass('is-visible');
}
singleLetters($('.cd-headline.letters').find('b'));

function singleLetters($words) {
  $words.each(function () {
    var word = $(this),
      letters = word.text().split(''),
      selected = word.hasClass('is-visible');
    for (i in letters) {
      letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
    }
    var newLetters = letters.join('');
    word.html(newLetters);
  });
}


