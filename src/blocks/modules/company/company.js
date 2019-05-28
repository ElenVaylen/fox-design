import $ from "jquery";
import 'slick-carousel'

const getWidthWindow = () => {
  let widthWindow = $(document).width();
  return widthWindow;
}

let companySlider = false;

const controlCompanySlider = () => {
  $(document).ready(function(){
    if (getWidthWindow() > 767) {
      $('.company__row').filter('.slick-initialized').slick('unslick');
      companySlider = false;
    } else {
      if(companySlider == false) {
        $('.company__row').slick({
          arrows: true,
          cssEase: 'linear',
          infinite: true,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          slidesToShow: 3,
          cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
          appendArrows: $('.company__arrows'),
          prevArrow: '<div class="slider-arrow slider-arrow__prev"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow__next"></div>',
          responsive: [
            {
              breakpoint: 424,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      }
      companySlider = true;
    }
  });
}

controlCompanySlider();

$(window).resize(function() {
  controlCompanySlider();
});