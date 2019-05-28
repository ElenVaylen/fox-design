import $ from "jquery";

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    $('.button-top').addClass('button-top__active');
  } else {
    $('.button-top').removeClass('button-top__active');
  }
}

window.onscroll = function() {scrollFunction()};

$(document).ready(function(){
  $('.button-top').on('click', function() {
    const targetButton = $(this).attr('href');
    const affsetTop = 0;
    $('html, body').animate({scrollTop: $(targetButton).offset().top - affsetTop }, 800);
    return false;
  });
});