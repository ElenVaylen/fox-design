import $ from "jquery";
import 'slick-carousel'

const getWidthWindow = () => {
  let widthWindow = $(document).width();
  return widthWindow;
}

let portfolioSlider = false;

const controlPortfolioSlider = () => {
  $(document).ready(function(){
    if (getWidthWindow() > 767) {
      $('.portfolio__row').filter('.slick-initialized').slick('unslick');
      portfolioSlider = false;
    } else {
      if(portfolioSlider == false) {
        $('.portfolio__row').slick({
          arrows: true,
          cssEase: 'linear',
          infinite: true,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          slidesToShow: 1,
          cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
          appendArrows: $('.portfolio__arrows'),
          prevArrow: '<div class="slider-arrow slider-arrow__prev"></div>',
          nextArrow: '<div class="slider-arrow slider-arrow__next"></div>',
        });
      }
      portfolioSlider = true;
    }
  });
}

controlPortfolioSlider();

$(window).resize(function() {
  controlPortfolioSlider();
});