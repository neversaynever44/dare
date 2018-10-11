(function () {
  let value,
    quantity = document.getElementsByClassName('js-cart-shop');


  function createBindings(quantityContainer) {
    let
      container = quantityContainer,
      quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0],
      increase = quantityContainer.getElementsByClassName('increase')[0],
      decrease = quantityContainer.getElementsByClassName('decrease')[0],
      // costOld = quantityContainer.getElementsByClassName('js-cost-old')[0],
      costOld = quantityContainer.getElementsByClassName('js-cost-old')[0],
      costNew = quantityContainer.getElementsByClassName('js-cost-new')[0],
      select = quantityContainer.getElementsByClassName('js-cart-select')[0],
      cartCloseBtn = quantityContainer.getElementsByClassName('js-cart-close')[0];
    increase.addEventListener('click', function () { increaseValue(quantityAmount, costOld, costNew); });
    decrease.addEventListener('click', function () { decreaseValue(quantityAmount, costOld, costNew); });
    select.addEventListener('change', function () {
      selectTotalPrice(select, costOld, costNew)
      cartTotals();

    })
    cartCloseBtn.addEventListener('click', function () {
      cartClose(container)
    })
    cartTotals();
    console.log(costOld);
  }
  function init() {
    for (let i = 0; i < quantity.length; i++) {
      createBindings(quantity[i]);
    }
  };

  function cartClose(container) {
    container.parentNode.removeChild(container);
    cartTotals();
  }
  function increaseValue(quantityAmount, costOld, costNew) {
    value = parseInt(quantityAmount.value, 10);

    value = isNaN(value) ? 0 : value;
    value++;
    quantityAmount.value = value;

    unitTotal(costOld, costNew)

    cartTotals()
  }

  function decreaseValue(quantityAmount, costOld, costNew) {
    value = parseInt(quantityAmount.value, 10);

    value = isNaN(value) ? 0 : value;
    if (value > 0) value--;

    quantityAmount.value = value;

    unitTotal(costOld, costNew)

    cartTotals()
  }
  function selectTotalPrice(select, costOld, costNew) {
    value = parseInt(select.selectedIndex, 10)
    value = isNaN(value) ? 0 : value;
    let
      oldPrice = costOld.textContent,
      newPrice = value * oldPrice
    costNew.innerHTML = currencyFormat(newPrice);

  }


  function unitTotal(costOld, costNew) {
    let
      oldPrice = costOld.textContent,
      newPrice = value * oldPrice;
    costNew.innerHTML = currencyFormat(newPrice);
  }
  // cartTotals
  function cartTotals() {
    let
      prices = document.querySelectorAll('.js-cost-new'),
      cartPage = document.getElementsByClassName('is-cartPage'),
      Subtotal = document.getElementById('Subtotal'),
      Tax = document.getElementById('Tax'),
      Coupon = document.getElementById('Coupon'),
      Total = document.getElementById('Total'),
      subtotalSumm = 0,
      couponRate = 10.00,
      couponField = document.getElementById('couponField');
    // taxRate = 0.05;
    for (let i = 0; i < prices.length; i++) {
      let price = parseFloat(prices[i].textContent)
      subtotalSumm += price;
    }

    if (cartPage.length > 0) {
      // tax
      let taxSumm = ((subtotalSumm / 100) * 5);
      Tax.innerHTML = taxSumm.toFixed(2);
      // coupon

      let couponCode = (couponField.value.length > 0 ? couponRate : 0);
      Coupon.innerHTML = couponCode.toFixed(2);
      // subtotal
      let totalSumm = (subtotalSumm + taxSumm) - couponCode;
      Subtotal.innerHTML = subtotalSumm.toFixed(2);
      // total
      Total.innerHTML = totalSumm.toFixed(2);
    }

  }



  function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    // currency = '$' + currency;
    return currency;
  }

  init();

})();
