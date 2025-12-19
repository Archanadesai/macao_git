// Fullscreen JS

(function () {
  var fullscreenButton = document.getElementById("maximize-screen");
  if (fullscreenButton) {
    var svgIcon = fullscreenButton.querySelector("svg use"); // Assuming the SVG use element is a child of fullscreenButton
    fullscreenButton.addEventListener("click", toggleFullScreen, false);
  }
  function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Entering fullscreen
      svgIcon.setAttribute("href", "../assets/svg/icon-sprite.svg#full-screen");
    } else {
      // Exiting fullscreen
      svgIcon.setAttribute("href", "../assets/svg/icon-sprite.svg#full-screen");
    }

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      var requestMethod = document.documentElement.requestFullscreen || document.documentElement.msRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen;
      if (requestMethod) {
        requestMethod.call(document.documentElement, Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      var exitMethod = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
      if (exitMethod) {
        exitMethod.call(document);
      }
    }
  }

  // Footer year update JS
  let yearUpdate = document.querySelector(".year-update");
  if (yearUpdate) {
    yearUpdate.textContent = new Date().getFullYear();
  }
})();

// cart js

document.addEventListener("DOMContentLoaded", function () {
  const badge = document.querySelector(".cart-box .badge");
  const cartList = document.querySelector(".cart-list");

  if (!cartList) return;
  function updateUnreadCount() {
    const totalItems = cartList.querySelectorAll("li").length;
    if (badge) {
      badge.textContent = totalItems;
      badge.style.display = totalItems === 0 ? "none" : "inline-block";
    }
  }
  function formatPrice(value) {
    return "$" + value.toFixed(2);
  }
  function updateItemPrice(li) {
    if (!li) return;

    const quantityInput = li.querySelector(".input-number");
    const priceElement = li.querySelector(".qty-box h6");
    if (!quantityInput || !priceElement) return;

    const originalPrice = parseFloat(priceElement.dataset.price);
    const quantity = parseInt(quantityInput.value);

    priceElement.textContent = formatPrice(originalPrice * quantity);
  }
  cartList.addEventListener("click", function (e) {
    const closeBtn = e.target.closest(".close-circle");
    if (closeBtn) {
      e.preventDefault();
      const li = closeBtn.closest("li");
      if (li) {
        li.remove();
        updateUnreadCount();
      }
      return;
    }
    const minusBtn = e.target.closest(".quantity-left-minus");
    if (minusBtn) {
      const input = minusBtn.closest(".input-group")?.querySelector(".input-number");
      if (!input) return;

      let value = parseInt(input.value);
      if (value > 1) input.value = value - 1;

      updateItemPrice(minusBtn.closest("li"));
      return;
    }
    const plusBtn = e.target.closest(".quantity-right-plus");
    if (plusBtn) {
      const input = plusBtn.closest(".input-group")?.querySelector(".input-number");
      if (!input) return;

      let value = parseInt(input.value);
      input.value = value + 1;

      updateItemPrice(plusBtn.closest("li"));
      return;
    }
  });
  cartList.querySelectorAll("li").forEach((li) => {
    const priceElement = li.querySelector(".qty-box h6");
    if (!priceElement) return;

    const price = parseFloat(priceElement.textContent.replace("$", ""));
    priceElement.dataset.price = price;
  });
  updateUnreadCount();
});


// notification close icon js

document.addEventListener("DOMContentLoaded", function () {
  const unreadBadge = document.querySelector(".unread");

  function updateUnreadCount() {
    const totalItems = document.querySelectorAll(".notification-list li").length;
    if (unreadBadge) {
      unreadBadge.textContent = `${totalItems} unread`;
      unreadBadge.style.display = totalItems === 0 ? "none" : "inline-block";
    }
  }

  // Event delegation for dynamic support
  const notificationList = document.querySelector(".notification-list");

  if (notificationList) {
    notificationList.addEventListener("click", function (e) {
      if (e.target.closest(".close-notification")) {
        e.preventDefault();
        const li = e.target.closest("li");
        if (li) {
          li.remove();
          updateUnreadCount();
        }
      }
    });
  }

  // Set initial count on page load
  updateUnreadCount();
  const smallHeaderToggle = document.getElementById("small-header-toggle");

  if (smallHeaderToggle) {
    smallHeaderToggle.addEventListener("click", function () {
      document.querySelector(".bookmark-body")?.classList.toggle("show-icons");
      document.querySelector(".language-nav")?.classList.toggle("show-icons");
      document.querySelector(".cart-nav")?.classList.toggle("show-icons");
      document.querySelector(".notification-body")?.classList.toggle("show-icons");
    });
  }
});