import $ from "jquery";

$(document).ready(function(){
  $('.top-menu__bar').on('click', function() {
    $('.body').addClass('top-menu__open');
  });
  $('.top-menu__close').on('click', function() {
    $('.body').removeClass('top-menu__open');
  });
  $('.top-menu__link').on('click', function() {
    $('.body').removeClass('top-menu__open');
    const target = $(this).attr('href');
    const affsetTop = 0;
    $('html, body').animate({scrollTop: $(target).offset().top - affsetTop }, 800);
    return false;
  });
});