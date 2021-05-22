import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import Card from './components/Card.vue'
Vue.component('m-card', Card) // 全局注册
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard) // 全局注册

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
