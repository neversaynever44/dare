// coupon code
couponCode();

function couponCode() {
  const COUPON_BTN = document.getElementById('coupon-code');
  if (COUPON_BTN) {
    COUPON_BTN.addEventListener('click', function () {
      this.classList.add('is-hidden')
      this.nextElementSibling.classList.add('is-active')
    })
  }

  function checkCustomer() {
    const WRAPPER = document.getElementById('customer');
    const LOGIN_BTN = document.getElementById('customer-btn');
    const LOGIN_TOOLTIP = document.getElementById('login-tooltip');
    const CLOSE_TOOLTIP = document.getElementById('close-tooltip');
    const CLOSE_COUPON = document.getElementById('close-coupon');
    const COUPON_WRP = document.getElementById('couponWrp');
    const COUPON_CODE = document.getElementById('coupon-code');
    const CREATE_ACCOUNT = document.getElementById('create-account');
    if (WRAPPER) {
      LOGIN_BTN.addEventListener('click', () => {
        WRAPPER.classList.add('is-hidden')
        LOGIN_TOOLTIP.classList.add('is-active')
      })
      hideTooltip(CLOSE_TOOLTIP, WRAPPER, LOGIN_TOOLTIP)
      hideTooltip(CREATE_ACCOUNT, WRAPPER, LOGIN_TOOLTIP)
      hideTooltip(CLOSE_COUPON, COUPON_CODE, COUPON_WRP)
    }
    function hideTooltip(el, wrapper, content) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        content.classList.remove('is-active')
        wrapper.classList.remove('is-hidden')
      })
    }
  }
  // returning customer
  checkCustomer();

  // inputs focus

  selectsSelected();
  inputsFocus();
  function selectsSelected() {
    let colors = [
      '#f5425a',
      'rgba(44,41,41,1)',
    ]
    let selects = document.querySelectorAll('.sel');
    for (let i = 0; i < selects.length; i++) {
      let el = selects[i];
      let elId = selects[i].id;
      let label = "label[for='" + `${elId}` + "']";
      let inputLabel = document.querySelector(label)
      el.addEventListener('change', function () {
        if (el.selectedIndex) {
          el.parentNode.classList.add('is-active')
          el.style.borderBottomColor = colors[1]
          inputLabel.style.color = colors[1]
        } else {
          el.parentNode.classList.remove('is-active')
          el.style.borderBottomColor = colors[0]
          inputLabel.style.color = colors[0]
        }
      })
    }
  }
  function inputsFocus() {
    let inputs = document.querySelectorAll('.check-in__field');

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      input.addEventListener('input', function () {
        if (input.value.length > 0) {
          this.parentNode.classList.add('is-active')
        } else {
          this.parentNode.classList.remove('is-active')
        }
      })
    }
  }



}
