// import $ from "jquery";
// import 'malihu-custom-scrollbar-plugin'

(function () {
  'use strict';

  const body = document.querySelector('body');
  const activeClass = 'is-active';
  const bodyClass = 'is-show-popup';
  const close = document.querySelectorAll('.js-close');
  document.addEventListener('click', clickOnDocumentHandler);
  // close.addEventListener('click', clickOnCloseHandler);
  // for (let i = 0; i < close.length; i++) {
  //   const element = close[i];
  //   element.addEventListener('click', function () {
  //   })
  // }

  close.forEach(function (el) {
    el.addEventListener('click', function () {
      clickOnCloseHandler();
    })
  })

  function clickOnDocumentHandler(e) {
    const button = e.target.closest('.js-open-popup');

    if (!button) return;

    const id = button.getAttribute('data-popup').trim();
    const popup = document.querySelector(`.js-popup[id="${id}"]`);

    showPopup(popup);
  }
  function clickOnCloseHandler() {
    const popupList = document.querySelectorAll('.js-popup');

    popupList.forEach(item => hidePopup(item));
  }
  function showPopup(modal) {
    modal.classList.add(activeClass);
    body.classList.add(bodyClass);
    // stopBodyScrolling(true)

  }
  function hidePopup(modal) {
    modal.classList.remove(activeClass);
    body.classList.remove(bodyClass);
    // stopBodyScrolling(false)
  }

})();

// function getScrollBarWidth() {
//     var inner = document.createElement('p');
//     inner.style.width = "100%";
//     inner.style.height = "200px";

//     var outer = document.createElement('div');
//     outer.style.position = "absolute";
//     outer.style.top = "0px";
//     outer.style.left = "0px";
//     outer.style.visibility = "hidden";
//     outer.style.width = "200px";
//     outer.style.height = "150px";
//     outer.style.overflow = "hidden";
//     outer.appendChild(inner);

//     document.body.appendChild(outer);
//     var w1 = inner.offsetWidth;
//     outer.style.overflow = 'scroll';
//     var w2 = inner.offsetWidth;
//     if (w1 == w2) w2 = outer.clientWidth;

//     document.body.removeChild(outer);

//     return (w1 - w2);
//   };

//     stopBodyScrolling(false);
// const body = document.body;
// var vpH = window.innerHeight;
// document.documentElement.style.height = vpH.toString() + "px";
// body.style.height = vpH.toString() + "px";

// function stopBodyScrolling(bool) {
//   if (bool === true) {
//     document.body.addEventListener("touchmove", freezeVp, false);
//     document.addEventListener("mousewheel", freezeVp, false);
//   } else {
//     document.body.removeEventListener("touchmove", freezeVp, false);
//     document.removeEventListener("mousewheel", freezeVp, false);
//   }
// }
// var freezeVp = function (e) {
//   e.preventDefault();
// };

