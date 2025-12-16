(function ($) {
    "use strict";
    var owl_carousel_custom = {
      init: function () {
        $("#owl-carousel-dashboard").owlCarousel({
          loop: true,
          margin: 10,
          items: 1,
          nav: false,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            500: {
              items: 2,
            },
            1200: {
              items: 1,
            },
          },
        });
      }
    }
    owl_carousel_custom.init();
    var owl_carousel_custom = {
      init: function () {
        $("#owl-carousel-general").owlCarousel({
          loop: true,
          margin: 10,
          items: 1,
          nav: false,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            1200: {
              items: 1,
            },
          },
        });
      },
    };
    owl_carousel_custom.init();
})(jQuery);