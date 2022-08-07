const updateSlidersByMQ = () => {
  if (tablet.matches) {

    if (magazineSliderMobile.swiper instanceof Swiper) magazineSliderMobile.destroy()
    if (materialsSlider.swiper instanceof Swiper) materialsSlider.destroy()
    if (magazineSliderTablet.swiper === undefined) magazineSliderTablet.init();
    if (newsSlider.swiper === undefined) newsSlider.init();

  } else if (mobile.matches) {

    if (magazineSliderTablet.swiper instanceof Swiper) magazineSliderTablet.destroy();
    if (newsSlider.swiper instanceof Swiper) newsSlider.destroy();
    if (magazineSliderMobile.swiper === undefined) magazineSliderMobile.init();
    if (materialsSlider.swiper === undefined) materialsSlider.init();
  }
}

const newsSlider = {
  swiper: undefined,
  init: function () {
    this.swiper = new Swiper(".news .swiper", {
      slidesPerView: 'auto',
      spaceBetween: 16,
      scrollbar: {
        el: ".news .carousel__scroll",
        dragClass: "carousel__scroll-drag",
      },
      navigation: {
        nextEl: '.news .carousel__slider-navigation-next',
        prevEl: '.news .carousel__slider-navigation-prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      },
    });
  },
  destroy: function () {
    if (this.swiper instanceof Swiper) this.swiper.destroy(true, true);
    this.swiper = undefined;
  }

};

const magazineSliderMobile = {
  swiper: undefined,
  init: function () {
    this.swiper = new Swiper(".magazine .swiper", {
      scrollbar: false,
      slidesPerView: 'auto',
      grabCursor: true,
      effect: 'cards',
      cssMode: true,
      // centeredSlides: true,
      cardsEffect: {
        rotate: false,
      }
    });
  },
  destroy: function () {
    if (this.swiper instanceof Swiper) this.swiper.destroy(true, true);
    this.swiper = undefined;
  }

};

const magazineSliderTablet = {
  swiper: undefined,
  init: function () {
    this.swiper = new Swiper(".magazine .swiper", {
      slidesPerView: 'auto',
      spaceBetween: 16,
      // slideClass: 'magazine-card',
      scrollbar: {
        el: ".magazine .carousel__scroll",
        dragClass: "carousel__scroll-drag",
        draggable: true,
      },
      navigation: {
        nextEl: '.magazine .carousel__slider-navigation-next',
        prevEl: '.magazine .carousel__slider-navigation-prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 12,
        },
        1200: {
          spaceBetween: 20,
        }
      },
    });
  },
  destroy: function () {
    if (this.swiper instanceof Swiper) this.swiper.destroy(true, true);
    this.swiper = undefined;
  }
};

const materialsSlider = {
  swiper: undefined,
  init: function () {
    this.swiper = new Swiper(".swiper.materials", {
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {
        el: '.materials__slider-dots',

        bulletClass: 'materials__slider-dot',
        // horizontalClass: 'materials__slider-dots',
        bulletActiveClass: 'materials__slider-dot_type_active',
      }
    });
  },
  destroy: function () {
    if (this.swiper instanceof Swiper) this.swiper.destroy(true, true);
    this.swiper = undefined;
  }
};

window.addEventListener('load', function () {
  updateSlidersByMQ();
});

window.addEventListener('resize', function () {
  updateSlidersByMQ();
});



