const scrollTrigger = function () {
  var
    elements,
    sticky

  const _init = function () {
    elements = document.querySelectorAll('[data-trigger]');
    elements = Array.prototype.slice.call(elements);
    sticky = document.querySelector('.js-sticky');
    _addEventHandlers();
    _inView();
  }

  const _addEventHandlers = function () {
    window.addEventListener('scroll', _inView, false);
    document.addEventListener('load', _inView, false);
  }
  const _inView = function () {
    elements.forEach(function (element, index) {
      _itemsInOut(element, index);
    });
  }

  const _itemsInOut = function (element, index) {
    let pos = element.getBoundingClientRect();
    let innerHeight = window.innerHeight;
    let elBottomFromTop = pos.bottom;
    let elTopFromTop = pos.top;

    let footer = document.getElementById('footer');
    let elTopFromBottom = pos.top - innerHeight;

    let elBottomFromBottom = pos.bottom - innerHeight;


    if (elTopFromTop <= 0 && elBottomFromTop >= 0) {
      sticky.classList.add('is-active');
    }
    else if (elTopFromBottom <= 0 && elBottomFromBottom >= 0) {
      sticky.classList.remove('is-active');
    }

    else if (elTopFromBottom <= 0 && elBottomFromBottom <= 0) {
      sticky.classList.remove('is-active');
    }
  }
  return {
    init: _init
  }
}();

scrollTrigger.init();


// var isScrolling = false;

// window.addEventListener("scroll", throttleScroll, false);

// function throttleScroll(e) {
//   if (isScrolling == false) {
//     window.requestAnimationFrame(function () {
//       scrolling(e);
//       isScrolling = false;
//     });
//   }
//   isScrolling = true;
// }

// document.addEventListener("DOMContentLoaded", scrolling, false);

// const elements = document.querySelectorAll('[data-trigger]');
// const sticky = document.querySelector('.js-sticky');
// function triggerElement() {
//   elements.forEach(element => {
//     var pos = element.getBoundingClientRect();
//     var elBottomFromTop = pos.bottom;
//     var elTopFromTop = pos.top;
//     var elTopFromBottom = pos.top - window.innerHeight;
//     var elBottomFromBottom = pos.bottom - window.innerHeight;

//     if (elTopFromTop <= 0 && elBottomFromTop >= 0) {
//       sticky.classList.add('is-active');
//     }
//     else if (elTopFromBottom <= 0 && elBottomFromBottom >= 0) {
//       sticky.classList.remove('is-active');
//     }
//     else if (elTopFromBottom <= 0 && elBottomFromBottom <= 0) {
//       sticky.classList.remove('is-active');
//     }
//   });
// }

// function scrolling(e) {
//   triggerElement();
// }
