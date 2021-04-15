import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// dark mode
let toggler = document.querySelector(".yes");
let fullscreen = document.querySelector("#app");

toggler.addEventListener('click', () => {
    fullscreen.classList.toggle("dark");
})