import $ from "jquery";


//validate form
function validate(idForm) {
  let form = $("#" + idForm)
  form.find('.errorMessage').remove();
  let valid = true;

  //validate name
  let formName = form.find('[data-input="name"]');
  if (formName.val() == "") {
    let errorSpanName = createErrorSpan('Please, enter your name');
    formName.after(errorSpanName);
    valid = false;
  }

  // validate email
  let emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  let formEmail = form.find('[data-input="email"]');
  // console.log(formEmail)
  if (formEmail.val() == "") {
    let errorSpanEmail = createErrorSpan('Please, enter your Email');
    formEmail.after(errorSpanEmail);
    valid = false;
  } else if (formEmail.val().search(emailRegEx) == -1) {
    let errorSpanEmail = createErrorSpan('Wrong email address');
    formEmail.after(errorSpanEmail);
    valid = false;
  }


  // if something isn't valid
  if (!valid) return false;

  //if all valid
  return true;
}




// form-community
$('#btn-community').on('click', function (event) {
  event.preventDefault();
  const form = $(this).parents('form');
  // const valid = true;
  var valid = validate(form.attr('id'))
  if (valid) {
    $.ajax({
      contentType: "application/json",
      type: "POST",
      url: "main.php", //Change
      data: form.serialize()
    }).done(() => {
      $('.community__step-1').removeClass('is-active');
      setTimeout(() => {
        $('.community__step-2').addClass('is-active');
      }, 1000);
    })
    form.trigger("reset");
    return false;
  } else {
    event.preventDefault();
    $('.errorMessage').fadeIn();
    return false;
  }

});

//create error validation massage span
function createErrorSpan(errorMas) {
  var span = document.createElement('span');
  span.className = "errorMessage";
  span.innerHTML = errorMas;
  return span;
}