import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// dark mode
let toggler = document.querySelector(".colour-theme");
let fullscreen = document.querySelector("#app");

toggler.addEventListener('click', () => {
    fullscreen.classList.toggle("dark");
})

// Header Scroll
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (scrollY > 300) {
        header.classList.add("scrolled")

    } else {
        header.classList.remove("scrolled")
    }
});

// Mobile Navigation
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
    menu.classList.remove("opened");
    // menu.style.top = header.clientHeight + "px";
});

hamburger.addEventListener("click", (e) => {

    e.preventDefault();

    if (menu.classList.contains("opened")) {
        menu.classList.remove("opened");

    } else {

        menu.classList.add("opened");
    }
});
