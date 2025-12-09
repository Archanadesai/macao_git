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
        })
      }
    }
    owl_carousel_custom.init();
})(jQuery);