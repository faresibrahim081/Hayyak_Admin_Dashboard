document.addEventListener('DOMContentLoaded', function () {
    "use strict";
  
    /* scrollar */
    new PerfectScrollbar(".notify-list");
    new PerfectScrollbar(".search-content");
    // new PerfectScrollbar(".mega-menu-widgets")
  
    /* toggle button */
    document.querySelector(".btn-toggle").addEventListener('click', function () {
      if (document.body.classList.contains("toggled")) {
        document.body.classList.remove("toggled");
        document.querySelector(".sidebar-wrapper").removeEventListener("mouseenter", sidebarHoverIn);
        document.querySelector(".sidebar-wrapper").removeEventListener("mouseleave", sidebarHoverOut);
      } else {
        document.body.classList.add("toggled");
        document.querySelector(".sidebar-wrapper").addEventListener("mouseenter", sidebarHoverIn);
        document.querySelector(".sidebar-wrapper").addEventListener("mouseleave", sidebarHoverOut);
      }
    });
  
    function sidebarHoverIn() {
      document.body.classList.add("sidebar-hovered");
    }
  
    function sidebarHoverOut() {
      document.body.classList.remove("sidebar-hovered");
    }
  
    /* menu */
    document.addEventListener('DOMContentLoaded', function () {
      new MetisMenu("#sidenav");
    });
  
    document.querySelector(".sidebar-close").addEventListener('click', function () {
      document.body.classList.remove("toggled");
    });
  
    /* dark mode button */
    document.querySelector(".dark-mode i").addEventListener('click', function () {
      this.textContent = (this.textContent.trim() === "dark_mode") ? "light_mode" : "dark_mode";
    });
  
    document.querySelector(".dark-mode").addEventListener('click', function () {
      document.documentElement.setAttribute("data-bs-theme", (document.documentElement.getAttribute("data-bs-theme") === "dark") ? "light" : "dark");
    });
  
    /* sticky header */
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        document.querySelector(".top-header .navbar").classList.add("sticky-header");
      } else {
        document.querySelector(".top-header .navbar").classList.remove("sticky-header");
      }
    });
  
    /* email */
    document.querySelector(".email-toggle-btn").addEventListener('click', function () {
      document.querySelector(".email-wrapper").classList.toggle("email-toggled");
    });
  
    document.querySelector(".email-toggle-btn-mobile").addEventListener('click', function () {
      document.querySelector(".email-wrapper").classList.remove("email-toggled");
    });
  
    document.querySelector(".compose-mail-btn").addEventListener('click', function () {
      document.querySelector(".compose-mail-popup").style.display = "block";
    });
  
    document.querySelector(".compose-mail-close").addEventListener('click', function () {
      document.querySelector(".compose-mail-popup").style.display = "none";
    });
  
    /* chat */
    document.querySelector(".chat-toggle-btn").addEventListener('click', function () {
      document.querySelector(".chat-wrapper").classList.toggle("chat-toggled");
    });
  
    document.querySelector(".chat-toggle-btn-mobile").addEventListener('click', function () {
      document.querySelector(".chat-wrapper").classList.remove("chat-toggled");
    });
  
    /* switcher */
    document.getElementById("BlueTheme").addEventListener('click', function () {
      document.documentElement.setAttribute("data-bs-theme", "blue-theme");
    });
  
    document.getElementById("LightTheme").addEventListener('click', function () {
      document.documentElement.setAttribute("data-bs-theme", "light");
    });
  
    document.getElementById("DarkTheme").addEventListener('click', function () {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    });
  
    document.getElementById("SemiDarkTheme").addEventListener('click', function () {
      document.documentElement.setAttribute("data-bs-theme", "semi-dark");
    });
  
    document.getElementById("BoderedTheme").addEventListener('click', function () {
      document.documentElement.setAttribute("data-bs-theme", "bodered-theme");
    });
  
    /* search control */
    document.querySelector(".search-control").addEventListener('click', function () {
      document.querySelector(".search-popup").classList.add("d-block");
      document.querySelector(".search-close").classList.add("d-block");
    });
  
    document.querySelector(".search-close").addEventListener('click', function () {
      document.querySelector(".search-popup").classList.remove("d-block");
      document.querySelector(".search-close").classList.remove("d-block");
    });
  
    document.querySelector(".mobile-search-btn").addEventListener('click', function () {
      document.querySelector(".search-popup").classList.add("d-block");
    });
  
    document.querySelector(".mobile-search-close").addEventListener('click', function () {
      document.querySelector(".search-popup").classList.remove("d-block");
    });
  
    /* menu active */
    (function () {
      var currentLocation = window.location;
      var menuItems = document.querySelectorAll(".metismenu li a");
  
      menuItems.forEach(function (item) {
        if (item.href === currentLocation.href) {
          item.classList.add("mm-active");
          var parent = item.parentElement;
          while (parent) {
            parent.classList.add("mm-show");
            parent = parent.parentElement;
          }
        }
      });
    });
  
  });
  
  // filter
  const btn = document.querySelector('.btn-filter');
  const close = document.querySelector('.primaery-menu-close');
  const filterMenu = document.getElementById('offcanvasCart');
  
  btn.onclick = function () {
    filterMenu.classList.add("show");
  };
  
  close.onclick = function () {
    filterMenu.classList.remove("show");
  };
  