// import ScrollMagic from 'ScrollMagic';
// Number.prototype.numberFormat = function (decimals, dec_point, thousands_sep) {
//   dec_point = typeof dec_point !== 'undefined' ? dec_point : ',';
//   thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

//   var parts = this.toFixed(decimals).split('.');
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

//   return parts.join(dec_point);
// }
// const controller = new ScrollMagic.Controller();
// const startValue = { value: 0 },
//   finishValue = document.querySelector(".js-count");
// const tm2 = new TimelineMax()
//   .to(startValue, 1.5, {
//     value: "145.315",
//     ease: Linear.easeNone,
//     onUpdate: function () {
//       const nwc = startValue.value.numberFormat(3);
//       finishValue.innerHTML = nwc;
//     }
//   })
//   .from('.btn-primary', 0.1, { autoAlpha: "0", scale: "1.2", ease: Linear.easeNone })

// new ScrollMagic.Scene({
//   triggerElement: "#entry",
//   triggerHook: "onStart"
// })
//   .setTween(tm2)
//   .addTo(controller);