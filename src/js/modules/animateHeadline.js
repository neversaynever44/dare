import $ from "jquery";

// const animationDelay = 2500;

// let scroll = false;
// let pageY;

// let plus = document.querySelector('.plus');
// var plusOffset = plus.offsetTop;

// var promo = plusOffset / 1.5;
// let promoPic = document.querySelector('.promo__pic');
// let promoScroll = document.querySelector('.promo__scroll');
// function slidePhone() {
//   promoScroll.classList.add('is-hidden')
//   promoPic.classList.add('is-scroll')
// }

// window.addEventListener('scroll', function () {
//   pageY = window.pageYOffset;

//   if (!scroll && pageY > promo) {
//     scroll = true
//     slidePhone();
//     animateHeadline($('.cd-headline'));
//   }
// })



function animateHeadline($headlines) {
  $headlines.each(function () {
    var headline = $(this);
    //trigger animation
    setTimeout(function () { hideWord(headline.find('.is-visible')) }, animationDelay);
    //other checks here ...
  });
}
function hideWord($word) {
  var nextWord = takeNext($word);
  switchWord($word, nextWord);
  setTimeout(function () { hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-visible').addClass('is-hidden');
  $newWord.removeClass('is-hidden').addClass('is-visible');
}
singleLetters($('.cd-headline.letters').find('b'));

function singleLetters($words) {
  $words.each(function () {
    var word = $(this),
      letters = word.text().split(''),
      selected = word.hasClass('is-visible');
    for (i in letters) {
      letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
    }
    var newLetters = letters.join('');
    word.html(newLetters);
  });
}