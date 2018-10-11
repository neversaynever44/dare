

const BILLING_FORM = document.getElementById('billing')
if (BILLING_FORM) {
  BILLING_FORM.addEventListener('submit', event => {
    event.preventDefault()
    checkForm('billing')
  })
}

let colors = [
  '#f5425a',
  'rgba(44,41,41,1)',
]

function checkForm(idForm) {
  let
    form = document.getElementById(idForm),
    inputs = form.querySelectorAll('[data-input="required"]'),
    selects = form.querySelectorAll('[data-input="selects"]'),
    email = form.querySelector('[data-input="email"]'),
    phone = form.querySelector('[data-input="phone"]'),
    boolTestInput,
    boolTestSelect,
    boolTestEmail,
    boolTestPhone

  // inputs fields
  for (let i = 0; i < inputs.length; i++) {
    const thisInput = inputs[i];
    boolTestInput = checkInput(thisInput)
  }
  // selects length
  for (let i = 0; i < selects.length; i++) {
    const thisSelects = selects[i];
    boolTestSelect = checkSelect(thisSelects)
  }
  boolTestEmail = checkEmail(email)
  boolTestPhone = checkPhone(phone)
  if (!boolTestEmail && !boolTestInput && !boolTestPhone) {
    setTimeout(() => {
      location.assign('details.html')
    }, 1500);

  }
}

function checkInput(input) {
  let
    inputId = input.id,
    inputSelector = "label[for='" + `${inputId}` + "']",
    inputLabel = document.querySelector(inputSelector)

  if (input.value.length === 0) {
    inputLabel.style.color = colors[0]
    input.style.borderBottomColor = colors[0]
    return true
  } else {
    inputLabel.style.color = colors[1]
    input.style.borderBottomColor = colors[1]
    return false
  }
}

function checkSelect(select) {
  let
    selectId = select.id,
    selectSelector = "label[for='" + `${selectId}` + "']",
    selectLabel = document.querySelector(selectSelector)

  if (select.value.length === 0) {
    selectLabel.style.color = colors[0]
    select.style.borderBottomColor = colors[0]
    return true
  } else {
    selectLabel.style.color = colors[1]
    select.style.borderBottomColor = colors[1]
    return false
  }
}



function checkEmail(mail) {
  let
    emailId = mail.id,
    emailSelector = "label[for='" + `${emailId}` + "']",
    emailLabel = document.querySelector(emailSelector),
    emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailRegEx.test(mail.value)) {
    emailLabel.style.color = colors[0]
    mail.style.borderBottomColor = colors[0]
    return true
  } else {
    emailLabel.style.color = colors[1]
    mail.style.borderBottomColor = colors[1]
    return false
  }
}

function checkPhone(phone) {
  let
    phoneId = phone.id,
    phoneSelector = "label[for='" + `${phoneId}` + "']",
    phoneLabel = document.querySelector(phoneSelector),
    phoneRegEx = /^\+?\d+(\(\d+\))?[\d\-\s]+\d+$/;

  if (!phoneRegEx.test(phone.value)) {
    phoneLabel.style.color = colors[0]
    phone.style.borderBottomColor = colors[0]
    return true
  } else {
    phoneLabel.style.color = colors[1]
    phone.style.borderBottomColor = colors[1]
    return false
  }
}