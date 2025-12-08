(function () {
  // // visitor chart
  // var visitorUser = {
  //   series: [
  //     {
  //       name: "Growth",
  //       data: [9, 25, 18, 30, 9, 14, 26, 22, 28, 16, 9, 8, 16],
  //     },
  //   ],
  //   chart: {
  //     height: 160,
  //     type: "line",
  //     stacked: true,
  //     offsetY: -10,
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   colors: ["#7366FF"],
  //   stroke: {
  //     width: 3,
  //     curve: "smooth",
  //   },
  //   xaxis: {
  //     lines: {
  //       show: true,
  //     },
  //     type: "category",
  //     categories: ["0", "", "10k", "", "20k", "", "30k", "", "40k", "", "50k", "", "60k"],
  //     labels: {
  //       style: {
  //         fontFamily: "Rubik, sans-serif",
  //         fontWeight: 500,
  //         colors: "#8D8D8D",
  //       },
  //     },
  //     axisTicks: {
  //       show: false,
  //     },
  //     axisBorder: {
  //       show: false,
  //     },
  //   },
  //   grid: {
  //     show: true,
  //     borderColor: "var(--chart-dashed-border)",
  //     strokeDashArray: 3,
  //     position: "back",
  //     xaxis: {
  //       lines: {
  //         show: true,
  //       },
  //     },
  //     yaxis: {
  //       lines: {
  //         show: false,
  //       },
  //     },
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shade: "dark",
  //       gradientToColors: ["#7366FF"],
  //       shadeIntensity: 1,
  //       type: "horizontal",
  //       opacityFrom: 1,
  //       opacityTo: 1,
  //       colorStops: [
  //         {
  //           offset: 0,
  //           color: "#48A3D7",
  //           opacity: 1,
  //         },
  //         {
  //           offset: 100,
  //           color: "#7366FF",
  //           opacity: 1,
  //         },
  //       ],
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       show: false,
  //     },
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       options: {
  //         chart: {
  //           height: 310,
  //           offsetY: 0,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 1345,
  //       options: {
  //         chart: {
  //           height: 300,
  //           offsetY: 0,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 1248,
  //       options: {
  //         chart: {
  //           height: 300,
  //           offsetY: 0,
  //         },
  //       },
  //     },

  //     {
  //       breakpoint: 1200,
  //       options: {
  //         chart: {
  //           height: 130,
  //           offsetY: -20,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 792,
  //       options: {
  //         chart: {
  //           offsetY: 0,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       options: {
  //         chart: {
  //           height: 150,
  //           offsetY: -20,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 389,
  //       options: {
  //         chart: {
  //           offsetY: 0,
  //         },
  //       },
  //     },
  //   ],
  // };

  // var visitorChart = new ApexCharts(document.querySelector("#visitor_chart"), visitorUser);
  // visitorChart.render();

  // // currently sale
  // var chartCurrent = {
  //   series: [
  //     {
  //       name: "Earning",
  //       data: [300, 150, 250, 270, 400, 420, 600, 420, 400, 700, 600, 200],
  //     },
  //     {
  //       name: "Expense",
  //       data: [300, 750, 700, 840, 850, 999, 900, 999, 850, 470, 400, 500],
  //     },
  //   ],
  //   chart: {
  //     type: "bar",
  //     height: 312,
  //     stacked: true,
  //     toolbar: {
  //       show: false,
  //     },
  //     dropShadow: {
  //       enabled: true,
  //       top: 8,
  //       left: 0,
  //       blur: 8,
  //       color: "#7064F5",
  //       opacity: 0.1,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: "20%",
  //       borderRadius: 0,
  //     },
  //   },
  //   grid: {
  //     borderColor: "var(--chart-border)",
  //     yaxis: {
  //       lines: {
  //         show: true,
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     width: 2,
  //     dashArray: 0,
  //     lineCap: "butt",
  //     colors: "#fff",
  //   },
  //   fill: {
  //     opacity: 1,
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   states: {
  //     hover: {
  //       filter: {
  //         type: "darken",
  //         value: 1,
  //       },
  //     },
  //   },
  //   colors: [MacaoAdminConfig.primary, "#AAAFCB"],
  //   yaxis: {
  //     tickAmount: 3,
  //     labels: {
  //       show: true,
  //       style: {
  //         fontFamily: "Rubik, sans-serif",
  //       },
  //     },
  //     axisBorder: {
  //       show: false,
  //     },
  //     axisTicks: {
  //       show: false,
  //     },
  //   },
  //   xaxis: {
  //     categories: ["Jan", "Feb", "Mar", " Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //     labels: {
  //       style: {
  //         fontFamily: "Rubik, sans-serif",
  //       },
  //     },
  //     axisBorder: {
  //       show: false,
  //     },
  //     axisTicks: {
  //       show: false,
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       formatter: function (value) {
  //         return value + "k";
  //       },
  //       style: {
  //         fontFamily: "Rubik, sans-serif",
  //         fontWeight: 400,
  //         colors: "#52526C",
  //         fontSize: 12,
  //       },
  //     },
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       options: {
  //         chart: {
  //           height: 310,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 1200,
  //       options: {
  //         chart: {
  //           height: 280,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       options: {
  //         plotOptions: {
  //           bar: {
  //             columnWidth: "15px",
  //           },
  //         },
  //         yaxis: {
  //           labels: {
  //             show: false,
  //           },
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       options: {
  //         plotOptions: {
  //           bar: {
  //             columnWidth: "8px",
  //           },
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       options: {
  //         plotOptions: {
  //           bar: {
  //             columnWidth: "6px",
  //           },
  //         },
  //       },
  //     },
  //   ],
  // };

  // var currentChart = new ApexCharts(document.querySelector("#chart-currently"), chartCurrent);
  // currentChart.render();

  // // Monthly targets
  // var monthlyTarget = {
  //   series: [92.77],
  //   chart: {
  //     type: "radialBar",
  //     height: 320,
  //     offsetY: -20,
  //     sparkline: {
  //       enabled: true,
  //     },
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       hollow: {
  //         size: "65%",
  //       },
  //       startAngle: -90,
  //       endAngle: 90,
  //       track: {
  //         background: "#d7e2e9",
  //         strokeWidth: "97%",
  //         margin: 5,
  //         dropShadow: {
  //           enabled: true,
  //           top: 2,
  //           left: 0,
  //           color: "#999",
  //           opacity: 1,
  //           blur: 2,
  //         },
  //       },
  //       dataLabels: {
  //         name: {
  //           show: true,
  //           offsetY: -10,
  //         },
  //         value: {
  //           show: true,
  //           offsetY: -50,
  //           fontSize: "18px",
  //           fontWeight: "600",
  //           color: "#2F2F3B",
  //         },
  //         total: {
  //           show: true,
  //           label: "+60%",
  //           color: MacaoAdminConfig.primary,
  //           fontSize: "14px",
  //           fontFamily: "Rubik, sans-serif",
  //           fontWeight: 400,
  //           formatter: function () {
  //             return "89%";
  //           },
  //         },
  //       },
  //     },
  //   },
  //   grid: {
  //     padding: {
  //       top: -10,
  //     },
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shade: "dark",
  //       shadeIntensity: 0.4,
  //       inverseColors: false,
  //       opacityFrom: 1,
  //       opacityTo: 1,
  //       stops: [100],
  //       colorStops: [
  //         {
  //           offset: 0,
  //           color: "#7366FF",
  //           opacity: 1,
  //         },
  //       ],
  //     },
  //   },
  //   labels: ["Average Results"],
  //   responsive: [
  //     {
  //       breakpoint: 1591,
  //       options: {
  //         chart: {
  //           height: 270,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 1426,
  //       options: {
  //         chart: {
  //           height: 240,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 1331,
  //       options: {
  //         chart: {
  //           height: 210,
  //         },
  //         plotOptions: {
  //           radialBar: {
  //             dataLabels: {
  //               value: {
  //                 fontSize: "16px",
  //               },
  //               total: {
  //                 fontSize: "13px",
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 1233,
  //       options: {
  //         chart: {
  //           height: 200,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       options: {
  //         chart: {
  //           height: 250,
  //         },
  //       },
  //     },
  //   ],
  // };

  // var monthlyChart = new ApexCharts(document.querySelector("#monthly_target"), monthlyTarget);
  // monthlyChart.render();

  // // Sales Report
  // var saleReport = {
  //   series: [
  //     {
  //       name: "Refunds",
  //       type: "column",
  //       data: [25, 18, 15, 32, 16, 22, 18, 24, 15, 22, 19, 24],
  //     },
  //     {
  //       name: "Earnings",
  //       type: "line",
  //       data: [50, 66, 22, 40, 50, 79, 53, 66, 42, 19, 42, 63],
  //     },
  //     {
  //       name: "Orders",
  //       type: "line",
  //       data: [48, 33, 38, 32, 42, 33, 50, 22, 33, 48, 24, 35],
  //     },
  //   ],
  //   chart: {
  //     height: 315,
  //     type: "line",
  //     stacked: false,
  //     toolbar: {
  //       show: false,
  //     },
  //     dropShadow: {
  //       enabled: true,
  //       enabledOnSeries: [2],
  //       top: 10,
  //       left: 0,
  //       blur: 4,
  //       color: "#7366FF",
  //       opacity: 0.2,
  //     },
  //   },
  //   stroke: {
  //     width: [0, 2, 3],
  //     curve: "smooth",
  //     dashArray: [0, 8, 0],
  //   },
  //   plotOptions: {
  //     bar: {
  //       columnWidth: "30%",
  //     },
  //   },
  //   colors: ["var(--chart-progress-light)", "#ffb829", "#7366FF"],
  //   fill: {
  //     type: "solid",
  //     gradient: {
  //       shade: "dark",
  //       type: "vertical",
  //       opacityFrom: 1,
  //       opacityTo: 1,
  //       stops: [0, 100],
  //     },
  //   },
  //   grid: {
  //     borderColor: "var(--chart-border)",
  //     yaxis: {
  //       lines: {
  //         show: true,
  //       },
  //     },
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   xaxis: {
  //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //     labels: {
  //       style: {
  //         fontFamily: "Rubik, sans-serif",
  //         colors: ["#52526c"],
  //       },
  //     },
  //     axisBorder: {
  //       show: false,
  //     },
  //     axisTicks: {
  //       show: false,
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: "Points",
  //     },
  //     min: 0,
  //     title: {
  //       text: undefined,
  //     },
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 1870,
  //       options: {
  //         chart: {
  //           height: 320,
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 486,
  //       options: {
  //         xaxis: {
  //           tickAmount: 4,
  //         },
  //       },
  //     },
  //   ],
  // };

  // var saleReportChart = new ApexCharts(document.querySelector("#sale_report"), saleReport);
  // saleReportChart.render();

var options = {
  chart: {
    type: "line",
    height: 365,
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

var options = {
  series: [87],
  chart: {
    height: 300,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "60%",
      },
      track: {
        background: "#f2f2f2",
        strokeWidth: "100%",
        margin: 5,
      },
      dataLabels: {
        name: {
          offsetY: 20,
          fontSize: "14px",
          color: "#000",
          show: true,
        },
        value: {
          offsetY: -10,
          fontSize: "22px",
          fontWeight: 700,
          show: true,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  fill: {
    type: "solid",
    colors: [MacaoAdminConfig.primary],
  },
  stroke: {
    dashArray: 8,
  },
  labels: ["Growth"],
};


var chart = new ApexCharts(document.querySelector("#browservisiting"), options);
chart.render();

 var attendance_option = {
   series: [
     {
       name: "Total Present",
       data: [35, 40, 15, 45, 38, 55, 25],
     },
     {
       name: "Total Absent",
       data: [25, 45, 30, 35, 48, 35, 20],
     },
   ],
   chart: {
     type: "bar",
     height: 295,
     toolbar: {
       show: false,
     },
   },

   plotOptions: {
     bar: {
       horizontal: false,
       columnWidth: "55%",
       endingShape: "rounded",
     },
   },
   dataLabels: {
     enabled: false,
   },
   stroke: {
     show: true,
     width: 2,
     colors: ["transparent"],
   },
   grid: {
     show: true,
     borderColor: "var(--chart-border)",
   },
   xaxis: {
     categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
     axisTicks: {
       show: false,
     },
     labels: {
       style: {
         colors: "var(--chart-text-color)",
         fontSize: "12px",
         fontFamily: "Rubik, sans-serif",
         fontWeight: 400,
       },
     },
   },
   yaxis: {
     min: 0,
     max: 60,
     tickAmount: 6,
     tickPlacement: "between",
     labels: {
       style: {
         colors: "var(--chart-text-color)",
         fontSize: "12px",
         fontFamily: "Rubik, sans-serif",
         fontWeight: 400,
       },
     },
   },
   colors: ["var(--theme-default)", MacaoAdminConfig.secondary],
   fill: {
     opacity: 1,
   },
   legend: {
     show: false,
   },
   responsive: [
     {
       breakpoint: 1661,
       options: {
         chart: {
           height: 325,
         },
       },
     },
     {
       breakpoint: 1531,
       options: {
         chart: {
           height: 380,
         },
       },
     },
     {
       breakpoint: 1400,
       options: {
         chart: {
           height: 370,
         },
       },
     },
     {
       breakpoint: 1200,
       options: {
         chart: {
           height: 320,
         },
       },
     },
     {
       breakpoint: 771,
       options: {
         chart: {
           height: 275,
         },
       },
     },
     {
       breakpoint: 590,
       options: {
         chart: {
           height: 215,
         },
       },
     },
   ],
 };

 var attendance_option = new ApexCharts(document.querySelector("#monthlyChart"), attendance_option);
 attendance_option.render();
  var deliveryDuration = {
    series: [
      {
        name: "Late Delivery",
        type: "column",
        data: [37, 30, 25, 56, 39, 28, 30, 18, 45, 20, 26],
      },
      {
        name: "On Time Delivery",
        type: "line",
        data: [75, 45, 38, 36, 68, 74, 60, 55, 72, 20, 65],
      },
    ],
    chart: {
      height: 270,
      type: "line",
      stacked: false,
      offsetX: 20,
      offsetY: 20,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: [1],
        top: 13,
        left: 0,
        blur: 6,
        color: MacaoAdminConfig.primary,
        opacity: 0.4,
      },
    },
    stroke: {
      width: [0, 2],
      curve: "smooth",
      dashArray: [0, 0],
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    colors: ["rgba(131, 131, 131, 0.3)", MacaoAdminConfig.primary],
    fill: {
      type: "solid",
      gradient: {
        shade: "dark",
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "var(--chart-border)",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    markers: {
      size: 0,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 4,
          fillColor: "rgba(131, 131, 131, 1)",
          strokeColor: "var(--white)",
          size: 6,
          sizeOffset: 3,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 4,
          fillColor: MacaoAdminConfig.primary,
          strokeColor: "var(--white)",
          size: 6,
          sizeOffset: 3,
        },
      ],
    },
    annotations: {
      points: [
        {
          x: 217,
          y: 29.5,
          marker: {
            size: 6,
            fillColor: "rgba(131, 131, 131, 0.3)",
            strokeColor: "var(--white)",
            strokeWidth: 2,
            radius: 5,
          },
        },
      ],
      xaxis: [
        {
          x: 217,
          strokeDashArray: 2,
          borderWidth: 1,
          borderColor: "var(--body-font-color)",
        },
      ],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", " Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      labels: {
        style: {
          fontFamily: "Rubik, sans-serif",
          colors: ["#52526c"],
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
      max: 100,
      tickAmount: 5,
      title: {
        text: undefined,
      },
    },
    responsive: [
      {
        breakpoint: 1870,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1691,
        options: {
          chart: {
            height: 280,
          },
        },
      },
      {
        breakpoint: 1245,
        options: {
          xaxis: {
            tickAmount: 5,
            tickPlacement: "on",
          },
          annotations: {
            points: [
              {
                x: 103,
                y: 29.5,
                marker: {
                  size: 6,
                  fillColor: "rgba(131, 131, 131, 0.3)",
                  strokeColor: "var(--white)",
                  strokeWidth: 2,
                  radius: 5,
                },
              },
            ],
            xaxis: [
              {
                x: 103,
                strokeDashArray: 2,
                borderWidth: 1,
                borderColor: "var(--body-font-color)",
              },
            ],
          },
        },
      },
      {
        breakpoint: 1063,
        options: {
          chart: {
            height: 305,
          },
        },
      },
      {
        breakpoint: 1048,
        options: {
          chart: {
            height: 328,
          },
        },
      },
      {
        breakpoint: 1008,
        options: {
          chart: {
            height: 350,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 280,
          },
        },
      },
      {
        breakpoint: 968,
        options: {
          chart: {
            height: 328,
          },
        },
      },
      {
        breakpoint: 928,
        options: {
          chart: {
            height: 350,
          },
        },
      },
      {
        breakpoint: 778,
        options: {
          chart: {
            height: 375,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 250,
            offsetX: 0,
            offsetY: 0,
          },
          xaxis: {
            tickAmount: 3,
            tickPlacement: "on",
          },
        },
      },
    ],
  };

  // // Initialize the chart
  var deliveryDurationChart = new ApexCharts(document.querySelector("#delivery-duration"), deliveryDuration);
  deliveryDurationChart.render();

})();

// // time
// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   // var s = today.getSeconds();
//   var ampm = h >= 12 ? "PM" : "AM";
//   h = h % 12;
//   h = h ? h : 12;
//   m = checkTime(m);
//   // s = checkTime(s);
//   document.getElementById("txt").innerHTML = h + ":" + m + " " + ampm;
//   var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   } // add zero in front of numbers < 10
//   return i;
// }
