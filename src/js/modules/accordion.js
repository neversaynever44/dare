(function () {
  'use strict';
  let _prevClick;
  let toggleClick = document.querySelectorAll('.js-toggle');

  for (let i = 0; i < toggleClick.length; i++) {
    toggleClick[i].addEventListener('click', function () {
      if (_prevClick && _prevClick !== this) {
        _prevClick.classList.remove("is-active");
        _prevClick.nextElementSibling.style.maxHeight = '';
      }
      this.classList.toggle("is-active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = '';
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      _prevClick = this;

    });
  }



})();