// import Splitter from 'split-html-to-chars';
import { TweenMax } from 'gsap';
// import ScrollMagic from 'ScrollMagic';
// import $ from "jquery";

import SplitText from "split-text";

// let els = document.querySelectorAll(".js-splitme");
// [].forEach.call(els, function (el) {
//   // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
//   el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');

// });



// $(".js-splitme").each(function () {
//   const controller = new ScrollMagic.Controller();
//   TimelineLite.defaultEase = Power2.easeOut

//   const tl = new TimelineLite()
//     .staggerFromTo('.js-splitme .letter', 1, { autoAlpha: 0 }, { autoAlpha: 1 }, "0.3")

//   const scene1 = new ScrollMagic.Scene({
//     triggerElement: this,
//     offset: -30,
//     reverse: true
//   })
//     .setTween(tl)
//     .addTo(controller)
// });

var introtextsplit = new SplitText("#js-splitme", { delay: 2 });

TweenMax.staggerFrom(introtextsplit.chars, 0.5, { opacity: 0, x: 10, ease: Power1.easeInOut }, 0.2);


// const mySplitText = new SplitText("title", { type: "chars, words" }),
//   tl = new TimelineLite(),
//   numChars = mySplitText.chars.length;

// for (var i = 0; i < numChars; i++) {
//   //random value used as position parameter
//   tl.from(mySplitText.chars[i], 2, { opacity: 0 }, Math.random() * 2);
// }