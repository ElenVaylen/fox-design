import $ from "jquery";
import 'slick-carousel'

const getWidthWindow = () => {
  let widthWindow = $(document).width();
  return widthWindow;
}
let servicesSlider = false;

const controlServicesSlider = () => {
  $(document).ready(function(){
    if (getWidthWindow() > 767) {
      $('.services__row').filter('.slick-initialized').slick('unslick');
      servicesSlider = false;
    } else {
      if(servicesSlider == false) {
        $('.services__row').slick({
          arrows: true,
          cssEase: 'linear',
          infinite: true,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          slidesToShow: 1,
          cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
          appendArrows: $('.services__arrows'),
          prevArrow: '<div class="slider-arrow slider-arrow__prev"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow__next"></div>',
        });
      }
      servicesSlider = true;
    }
  });
}

controlServicesSlider();

$(window).resize(function() {
  controlServicesSlider();
});

