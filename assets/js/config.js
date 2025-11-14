(function () {
  var primary = localStorage.getItem("primary") || "#e16349";
  var secondary = localStorage.getItem("secondary") || "#000000";
  var success = localStorage.getItem("success") || "#4caf50";

  window.MacaoAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
    // theme success color
    success: success,
  };
})();
