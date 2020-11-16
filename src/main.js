import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueAwesomeSwiper from "vue-awesome-swiper";
import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';
Swiper.use([Navigation, Autoplay, Pagination]);
Vue.use(VueAwesomeSwiper);
import "swiper/swiper-bundle.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
