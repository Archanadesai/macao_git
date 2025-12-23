(function () {
var options = {
  chart: {
    type: "line",
    height: 360,
    toolbar: { show: false },
  },

  colors: [MacaoAdminConfig.primary, MacaoAdminConfig.secondary],

  stroke: {
    curve: "smooth",
    width: 3,
  },

  markers: {
    size: 0 ,
    strokeWidth: 2,
    hover: { size: 7 },
  },

  series: [
    {
      name: "Click through rate",
      data: [20, 45, 35, 50, 25, 60, 20, 80, 65],
    },
    {
      name: "Open rate",
      data: [10, 30, 55, 25, 40, 30, 70, 45, 50],
    },
  ],

  xaxis: {
    categories: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    labels: {
      style: {
        colors: "#777",
        fontSize: "12px",
      },
    },
  },

  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      formatter: (v) => v + "%",
      style: {
        colors: "#777",
      },
    },
  },

  grid: {
    borderColor: "#eee",
    strokeDashArray: 5,
  },

  tooltip: {
    theme: "dark",
    y: {
      formatter: (val) => val + "%",
    },
  },

  legend: {
    position: "top",
    horizontalAlign: "left",
    markers: { radius: 4 },
  },
};

var chart = new ApexCharts(document.querySelector("#deviceChart"), options);
chart.render();


// var options = {
//   chart: {
//     type: "donut",
//     height: 334,
//   },
//   series: [45, 15], // Example values: Income, Expand, Booking
//   labels: ["Income", "Expand"],

//   colors: [MacaoAdminConfig.primary, MacaoAdminConfig.secondary], // orange, lavender, light peach

//   plotOptions: {
//     pie: {
//       donut: {
//         size: "70%",
//         labels: {
//           show: true,
//           value: {
//             show: true,
//             fontSize: "18",
//             fontWeight: 600,
//             color: "#000",
//             formatter: () => "$24,006",
//           },
//           name: {
//             show: true,
//             offsetY: 10,
//             fontSize: "14px",
//             color: "#777",
//             formatter: () => "Business Spend",
//           },
//           total: {
//             show: false,
//           },
//         },
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },

//   legend: {
//     position: "bottom",
//     horizontalAlign: "center",
//     fontSize: "13px",
//     markers: {
//       width: 12,
//       height: 12,
//       radius: 12,
//     },
//   },

//   stroke: {
//     width: 0,
//   },
//   responsive: [
//       {
//         breakpoint: 1801,
//         options: {
//           chart: {
//             height: 340,
//           },
//         },
//       },
      
//     ],
// };

// var chart = new ApexCharts(document.querySelector("#browservisiting"), options);
// chart.render();

  var options = {
    series: [45, 25, 20, 10],
    chart: {
      height: 330,
      type: "donut",
    },
    stroke: {
      width: 0,
    },
    labels: ["Completed Orders", "Pending Orders", "Cancelled Orders", "Returned Orders"],
    colors: [MacaoAdminConfig.primary, "#ffb829", MacaoAdminConfig.secondary, "#6FBF73"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 15,
        vertical: 5,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: {
              show: true,
              color: "#000000",
              offsetY: 16,
            },
            value: {
              show: true,
              color: undefined,
              offsetY: -25,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              label: "Total",
              color: "#86909C",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + "%";
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1630,
        options: {
          chart: {
            height: 320,
          },
        },
      },
      {
        breakpoint: 1333,
        options: {
          chart: {
            height: 298,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 325,
          },
        },
      },
      {
        breakpoint: 826,
        options: {
          chart: {
            height: 340,
          },
        },
      },
    ],
  };
  var revenueproduct = new ApexCharts(document.querySelector("#revenueproduct"), options);
  revenueproduct.render();

var attendance_option = {
  series: [
    {
      name: "Hours",
      data: [2, 3, 4, 6, 5, 3, 4], // change your data here
    },
  ],

  chart: {
    type: "area",
    height: 290,
    toolbar: { show: false }, // remove top menu icons
  },

  stroke: {
    curve: "smooth",
    width: 3,
    colors: ["#E65A50"],
  },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: "#E65A50",
          opacity: 0.35,
        },
        {
          offset: 100,
          color: "#E65A50",
          opacity: 0.02,
        },
      ],
    },
  },

  markers: {
    size: 4,
    colors: ["#fff"],
    strokeColors: "#E65A50",
    strokeWidth: 3,
    hover: { size: 6 },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    labels: {
      style: { fontSize: "12px" },
    },
  },

  yaxis: {
    min: 0,
    labels: { style: { fontSize: "12px" } },
  },

  grid: {
    borderColor: "#eee",
  },

  annotations: {
    xaxis: [
      {
        x: 3,
        strokeDashArray: 0,
        borderColor: "rgba(230,90,80,0.5)",
        fillColor: "rgba(230,90,80,0.2)",
        opacity: 0.3,
      },
    ],
  },

  colors: [MacaoAdminConfig.primary], // Line color (Red for the gradient fill)
};

 var attendance_option = new ApexCharts(document.querySelector("#monthlyChart"), attendance_option);
 attendance_option.render();


 var options = {
   series: [
     {
       name: "Sales",
       data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
     },
     {
       name: "OPEX Ratio",
       data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
     },
     {
       name: "General & Admin",
       data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
     },
   ],
   chart: {
     stacked: true,
     type: "bar",
     height: 300,
     toolbar: {
       show: false,
     },
   },
   grid: {
     borderColor: "#f5f4f4",
     strokeDashArray: 5,
     yaxis: {
       lines: {
         show: true, // Ensure y-axis grids are shown
       },
     },
   },
   colors: ["rgb(225, 99, 73)", "rgba(225, 99, 73, 0.6)", "rgba(225, 99, 73, 0.3)"],
   plotOptions: {
     bar: {
       colors: {
         ranges: [
           {
             from: -100,
             to: -46,
             color: "#ebeff5",
           },
           {
             from: -45,
             to: 0,
             color: "#ebeff5",
           },
         ],
       },
       columnWidth: "20%",
     },
   },
   dataLabels: {
     enabled: false,
   },
   legend: {
     show: true,
     position: "top",
   },
   yaxis: {
     axisBorder: {
       show: true,
       color: "rgba(119, 119, 142, 0.05)",
       offsetX: 0,
       offsetY: 0,
     },
     axisTicks: {
       show: true,
       borderType: "solid",
       color: "rgba(119, 119, 142, 0.05)",
       width: 6,
       offsetX: 0,
       offsetY: 0,
     },
     labels: {
       formatter: function (y) {
         return y.toFixed(0) + "";
       },
     },
   },
   xaxis: {
     type: "month",
     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"],
     axisBorder: {
       show: false,
       color: "rgba(119, 119, 142, 0.05)",
       offsetX: 0,
       offsetY: 0,
     },
     axisTicks: {
       show: false,
       borderType: "solid",
       color: "rgba(119, 119, 142, 0.05)",
       width: 6,
       offsetX: 0,
       offsetY: 0,
     },
     labels: {
       rotate: -90,
     },
   },
   responsive: [
     {
       breakpoint: 1401,
       options: {
         chart: {
           height: 355,
         },
       },
     },
     {
       breakpoint: 1200,
       options: {
         chart: {
           height: 290,
         },
       },
     },
   ],
 };
 console.log(options.grid);
 document.getElementById("delivery-duration").innerHTML = "";
 var chart = new ApexCharts(document.querySelector("#delivery-duration"), options);
 chart.render();
 function salesOverview() {
   chart.updateOptions({
     colors: ["rgb(" + myVarVal + ")", "rgba(" + myVarVal + ", 0.6)", "rgba(" + myVarVal + ", 0.3)", "#ebeff5"],
   });
 }

})();
