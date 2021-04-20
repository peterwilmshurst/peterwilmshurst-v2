import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// dark mode
var toggler = document.querySelector(".theme");
var fullscreen = document.querySelector("#app");
var lightMode = document.querySelector(".lightIcon")
var darkMode = document.querySelector(".darkIcon")

toggler.addEventListener("click", toggleTheme)

function toggleTheme() {
  if (fullscreen.classList.contains("dark")) {
    fullscreen.classList.remove("dark");
    darkMode.style.display = "block";
    lightMode.style.display = "none";
  } else {
    fullscreen.classList.add("dark");
    darkMode.style.display = "none";
    lightMode.style.display =  "block";
  }
}

// Header Scroll
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (scrollY > 300) {
        header.classList.add("scrolled")

    } else {
        header.classList.remove("scrolled")
    }
});

// Mobile Menu
var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menu--link")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)