// (function ($) {
//   $(".animate-slider").slick({
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 20000,
//     pauseOnHover: false,
//     cssEase: "linear",
//   });

//   $(".testimonial-slider").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 800,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: true,
//           centerPadding: "300px",
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "200px",
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "100px",
//         },
//       },
//       {
//         breakpoint: 650,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "50px",
//         },
//       },
//       {
//         breakpoint: 575,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "0px",
//         },
//       },
//     ],
//   });
// })(jQuery);
(function ($) {
  $(".hero-image").slick({
    centerMode: false,
    centerPadding: "120px",
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 321,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
    ],
  });
})(jQuery);
