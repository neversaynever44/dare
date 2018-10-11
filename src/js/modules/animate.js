require('intersection-observer');
import $ from "jquery"


let curWidth = window.innerWidth;
let oldWidth = window.innerWidth;
let mobileW = 480;
let desktopW = 1024;
let laptopW = 767;
let isMobile = null;
let isDesktop = null;
let isLaptop = null;
isMobile = chechIfMobile(mobileW);
isLaptop = chechIfMobile(laptopW);
isDesktop = chechIfMobile(desktopW);

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


// bootcamp
let bootcamp = document.getElementById('bootcamp')
let training = document.getElementById('training')
let info = document.getElementById('info')
let faqs = document.getElementById('faqs')

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
  animateTechnology,
  animateBootcamp,
  animateTraining,
  animateInfo,
  animateFaqs

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
  technology,
  bootcamp,
  training,
  info,
  faqs
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

// if (!isMobile) {
for (let i = 0; i < screenAnimations.length; i++) {
  if (screenAnimationsAnchors[i]) {
    screenAnimationsObservers[i] = new IntersectionObserver(entries => {
      onEntry(i, entries)
    }, intersectionOptions);
    screenAnimationsObservers[i].observe(screenAnimationsAnchors[i])

  }
};
setStartAnimationPos();

// }
function setStartAnimationPos(params) {
  let tl = new TimelineMax();
  tl
    .set('.freedom, .feature__title, .scene__body, .scene__tabs, .feature__footer, .feature__dots, .testimonial__in, .reviews, .app, .program__in, .training__text, .training__title, .training__video, .info, .faqs__title, .stats', { alpha: 0 })
    .set('.training__title', { x: "-175" })
    .set('.training__text', { x: "175" })
  if (!mainPage.length) {
    tl.set('.footer__in', {
      alpha: 0
    })
  }
}


function animate1Screen() {
  if (!isDesktop) {
    let tl = new TimelineMax();
    tl
      .addLabel('layer')
      .set(('.promo__layer'), {
        className: '+=is-translate'
      }, "layer")
      // .fromTo('.promo__layer', 0.6, { yPercent: -150 }, { yPercent: 0 }, "layer+=0.1")
      // .add('book')
      .to('.promo__pic', 0.2, { scale: 1, alpha: 1 }, "layer+=0.1")
      // .fromTo('.promo__pic', 0.2, { scale: "1.33", alpha: "0" }, { scale: "1", alpha: "1" }, "mob-2+=0.1")
      // .to('.promo__pic', 0.2, { scale: "1", alpha: "1" }, "mob-2")
      .to('.promo__scroll', 0.2, { alpha: "1" }, "layer+=0.2")
  }

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
    .fromTo('.freedom__book', 1, { alpha: "0", x: "250" }, { alpha: "1", x: "0" }, "scene-=0.2")

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
    .to(startValue0, 1.4, {
      value: "50.409",
      onUpdate: function () {
        const nwc = startValue0.value.numberFormat(3);
        finishValue[0].innerHTML = nwc;
      }
    }, "stats-1")

    .addLabel('stats-2')
    .to((statsItems[1]), 0.3, {
      alpha: 1
    }, 'stats-1+=0.2')
    .to(startValue1, 1.4, {
      value: "38.506",
      onUpdate: function () {
        const nwc = startValue1.value.numberFormat(3);
        finishValue[1].innerHTML = nwc;
      }
    }, "stats-1+=0.2")

    .addLabel('stats-3')
    .to((statsItems[2]), 0.3, {
      alpha: 1
    }, 'stats-1+=0.4')
    .to(startValue2, 1.4, {
      value: "56.400",
      onUpdate: function () {
        const nwc = startValue2.value.numberFormat(3);
        finishValue[2].innerHTML = nwc;
      }
    }, "stats-1+=0.4")
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
    }, 'stats-1+=0.6')
    .set(('.stats__list'), {
      className: '+=stats__list-purple'
    }, "stats-1+=0.6")
    .to(".stats__book", 0.4, {
      paddingBottom: "0"
    }, 'stats-1+=0.6')



};
function animate4Screen() {
  let tl = new TimelineMax()
  tl
    .add('read')
    .to('.feature', 0.3, {
      alpha: 1
    }, "read +=0.1")
    .to('.feature__title', 0.3, {
      alpha: 1
    }, "read +=0.2")
    .to('.scene__body', 0.3, {
      alpha: 1
    }, "read +=0.3")
    .to('.scene__tabs', 0.3, {
      alpha: 1
    }, "read +=0.4")
    .to('.feature__dots', 0.3, {
      alpha: 1
    }, "read +=0.5")
    .to('.feature__footer', 0.3, {
      alpha: 1
    }, "read +=0.6")
}

function animateFooter() {

  if (!mainPage.length) {
    let tl = new TimelineMax()
    tl.defaultEase = Linear.easeInOut;
    tl
      .fromTo('.footer__in', 0.3, { alpha: "0", y: "15" }, { alpha: "1", y: "0" })
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
    let delay = 0.1 + i * 0.3;
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
  if (!isLaptop) {
    console.log('sas')
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


}
function animateBootcamp() {
  let tl = new TimelineMax();
  tl.fromTo('.bootcamp__title', 1, { alpha: "0", y: "-80" }, { alpha: "1", y: "0" }, 0.3)
  tl.fromTo('.bootcamp__subtitle', 1, { alpha: "0", y: "-60" }, { alpha: "1", y: "0" }, 0.4)
    .add('del')
  tl.fromTo('.bootcamp__scroll', 1, { alpha: 0, y: "-10" }, { alpha: 1, y: "0" }, "del")
}
function animateTraining() {
  let tl = new TimelineMax();
  tl
    .add('scene')
  tl.to('.training__title', 1, { alpha: "1", x: "0" }, "scene")
  tl.to('.training__text', 1, { alpha: "1", x: "0" }, "scene")
  tl.to('.training__video', 1, { alpha: "1" }, "scene+=0.1")
}
function animateInfo() {

  let tl = new TimelineMax();
  tl.to('.info', 1, { alpha: 1 })

}

function animateFaqs() {
  let list = document.querySelectorAll('.faqs__list-item');
  let tl = new TimelineMax();
  tl
    .to('.faqs__title', 0.3, { alpha: 1 })

  for (let i = 0; i < list.length; i++) {
    let li = list[i];
    let delay = 0.1 + i * 0.2;
    console.log(delay)
    tl
      .to(li, 0.2, { alpha: 1 }, delay)
  }
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
let plusTabs = document.querySelectorAll('.plus__tabs')

function slidePhone() {
  promoScroll.classList.add('is-hidden');
  promoPic.classList.add('is-scroll');
  if (plusTabs.length > 0) {
    plusTabs[1].classList.add('is-active')
  }
}

window.addEventListener('scroll', function () {
  pageY = window.pageYOffset;


  if (!scroll && pageY > pl) {
    scroll = true
    if (!isDesktop) {
      slidePhone();
      if (plusTabs.length > 0) {
        triggerCommunityContent()
      }

      function triggerCommunityContent() {
        const pic = document.getElementById('promoPic')
        let current = 0;
        setInterval(() => {
          for (let i = 0; i < plusTabs.length; i++) {
            const tab = plusTabs[i];
            if (tab.classList.contains('is-active')) {
              const tabAttr = tab.getAttribute('data-content');
              pic.src = `${tabAttr}`
            }
            tab.classList.remove('is-active')
          }
          if (current > plusTabs.length - 1) {
            current = 0
          }
          plusTabs[current++].classList.add('is-active')
        }, 5000)
      }



    }

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


