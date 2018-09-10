window.addEventListener("DOMContentLoaded", function () {
  let contentList = document.querySelectorAll('.js-content');
  let tabList = document.querySelectorAll('.js-tab');
  let dotList = document.querySelectorAll('.js-dots');


  tabList.forEach(tab => tab.addEventListener('click', clickOnTabHandler));
  dotList.forEach(dotItem => dotItem.addEventListener('click', clickOnDotHandler));

  // handlers
  function clickOnTabHandler(e) {
    const tab = this;
    const tabIndex = +tab.getAttribute('data-tab');
    const contentItems = document.querySelectorAll(`.js-content[data-tab="${tabIndex}"]`);
    const dot = document.querySelector(`.js-dots[data-tab="${tabIndex}"]`);

    removeActiveClass(tabList, contentList, dotList);
    setActiveClass(tab, contentItems, dot);
  }
  function clickOnDotHandler(e) {
    const dotItem = this;
    const dotIndex = +dotItem.getAttribute('data-tab');
    const tab = document.querySelector(`.js-tab[data-tab="${dotIndex}"]`);

    removeActiveClass(dotList);
    setActiveClass(dotItem);
    tab.click();
  }
  function triggerIntervalTabs() {

    for (let i = 0; i < tabList.length; i++) {
      let current = 0;

      setInterval(function () {
        if (current > tabList.length - 1) {
          current = 0
        }
        tabList[current++].click();

      }, 6000)

    }

  }

  let section = document.getElementById('feature')
  if (section) {
    triggerIntervalTabs();
  }




  function setActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      // если есть length, работаем с элементом как с collection
      if (item.length) {
        item.forEach(node => node.classList.add('is-active'))
      } else {
        item.classList.add('is-active')
      }
    });
  }

  function removeActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      item.forEach(node => node.classList.remove('is-active'));
    });
  }

});


