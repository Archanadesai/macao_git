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

document.addEventListener('DOMContentLoaded', function () {
    const qtyBox = document.querySelector('.qty-box');
    const minusBtn = qtyBox.querySelector('.quantity-left-minus');
    const plusBtn = qtyBox.querySelector('.quantity-right-plus');
    const qtyInput = qtyBox.querySelector('.input-number');
    const priceDisplay = qtyBox.querySelector('.font-primary');

    const unitPrice = 75; // Base price per item

    function updatePrice(qty) {
      const totalPrice = unitPrice * qty;
      priceDisplay.textContent = `$${totalPrice}`;
    }

    // Decrease quantity
    minusBtn.addEventListener('click', function () {
      let qty = parseInt(qtyInput.value) || 1;
      if (qty > 1) {
        qty--;
        qtyInput.value = qty;
        updatePrice(qty);
      }
    });

    // Increase quantity
    plusBtn.addEventListener('click', function () {
      let qty = parseInt(qtyInput.value) || 1;
      qty++;
      qtyInput.value = qty;
      updatePrice(qty);
    });

    // Optional: Update price when user types manually
    qtyInput.addEventListener('input', function () {
      let qty = parseInt(qtyInput.value);
      if (!isNaN(qty) && qty >= 1) {
        updatePrice(qty);
      }
    });
  });

// cart close icon js

document.addEventListener("DOMContentLoaded", function () {
  const badge = document.querySelector(".cart-box .badge");
  const cartList = document.querySelector(".cart-list");

  function updateUnreadCount() {
    const totalItems = cartList.querySelectorAll("li").length;
    if (badge) {
      badge.textContent = totalItems;
      badge.style.display = totalItems === 0 ? "none" : "inline-block";
    }
  }

  // Event delegation: listen for clicks on .close-circle
  if (cartList) {
    cartList.addEventListener("click", function (e) {
      const closeBtn = e.target.closest(".close-circle");
      if (closeBtn) {
        e.preventDefault();
        const li = closeBtn.closest("li");
        if (li) {
          li.remove();
          updateUnreadCount();
        }
      }
    });
  }

  // Initial count on page load
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
});