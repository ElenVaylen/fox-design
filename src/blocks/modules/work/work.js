import $ from "jquery";
import 'slick-carousel'

const getWidthWindow = () => {
  let widthWindow = $(document).width();
  return widthWindow;
}
let workSlider = false;
const controlWorkSlider = () => {
  $(document).ready(function(){
    if (getWidthWindow() > 767) {
      $('.work__row').filter('.slick-initialized').slick('unslick');
      workSlider = false;
    } else {
      if(workSlider == false) {
        $('.work__row').slick({
          arrows: true,
          cssEase: 'linear',
          infinite: true,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          slidesToShow: 1,
          cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
          appendArrows: $('.work__arrows'),
          prevArrow: '<div class="slider-arrow slider-arrow__prev"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow__next"></div>',
        });
      }
      workSlider = true;
    }
  });
}

controlWorkSlider();

$(window).resize(function() {
  controlWorkSlider();
});