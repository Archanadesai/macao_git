// Dashboard 2 JS

(function () {
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
       height: 385,
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
         breakpoint: 1399,
         options: {
           chart: {
             height: 385,
           },
         },
       },
     ],
   };

   // // Initialize the chart
   var deliveryDurationChart = new ApexCharts(document.querySelector("#delivery-duration"), deliveryDuration);
   deliveryDurationChart.render();


   var options = {
     chart: {
       height: 285,
       type: "line",
       toolbar: { show: false },
       foreColor: "#777",
     },

     // --- BAR SERIES (gradient columns) ---
     series: [
       {
         name: "Sales",
         type: "bar",
         data: [12, 10, 15, 13, 11, 12, 16], // adjust to your data
       },
       {
         name: "Trend",
         type: "line",
         data: [10, 12, 14, 11, 10, 9, 15],
       },
     ],

     fill: {
       type: ["gradient", "solid"],
       gradient: {
         shade: "light",
         type: "vertical",
         shadeIntensity: 0.4,
         gradientToColors: ["#C3B7FF"],
         inverseColors: false,
         opacityFrom: 1,
         opacityTo: 0.2,
         stops: [0, 100],
       },
     },

     colors: [MacaoAdminConfig.primary, "#ee9f8e"],

     stroke: {
       width: [0, 3],
       curve: "smooth",
     },

     markers: {
       size: 5,
       colors: "#fff",
       strokeColors: "#FF7750",
       strokeWidth: 2,
     },

     dataLabels: { enabled: false },

     xaxis: {
       categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
       labels: { style: { fontSize: "12px" } },
       axisTicks: { show: false },
       axisBorder: { show: false },
     },

     yaxis: {
       min: 0,
       max: 20,
       tickAmount: 4,
       labels: {
         formatter: function (val) {
           return "$" + val + "K";
         },
       },
     },

     grid: {
       borderColor: "#eee",
       strokeDashArray: 5,
       padding: { left: 10, right: 10 },
     },

     tooltip: {
       shared: true,
       intersect: false,
     },

     legend: { show: false },
   };

  var chart = new ApexCharts(document.querySelector("#sale-static"), options);
  chart.render();

})();
