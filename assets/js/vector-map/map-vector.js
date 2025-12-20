// Vector map JS
!(function (maps) {
  "use strict";
  var vMap = function () {};
  (vMap.prototype.init = function () {
    maps("#world-map").vectorMap({
      map: "world_mill_en",
      scaleColors: ["#2196F3", "#1B8BF9"],
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: !1,
      regionStyle: {
        initial: {
          fill: "#e16349",
        },
      },
      backgroundColor: "transparent",
    }),
      maps("#asia").vectorMap({
        map: "asia_mill",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#ffc107",
          },
        },
      }),
      maps("#india").vectorMap({
        map: "in_mill",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#007bff",
          },
        },
      }),
      maps("#usa").vectorMap({
        map: "us_aea_en",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#000000",
          },
        },
      }),
      maps("#uk").vectorMap({
        map: "uk_mill_en",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#FF5370",
          },
        },
      }),
      maps("#canada").vectorMap({
        map: "uk_mill_en",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#4caf50",
          },
        },
      }),
      maps("#chicago").vectorMap({
        map: "us-il-chicago_mill_en",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#d32f2f",
          },
        },
      }),
      maps("#australia").vectorMap({
        map: "au_mill",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "#1e1e1e",
          },
        },
      });
  }),
    (maps.VectorMap = new vMap()),
    (maps.VectorMap.Constructor = vMap);
})(window.jQuery),
  (function (maps) {
    "use strict";
    maps.VectorMap.init();
  })(window.jQuery);
