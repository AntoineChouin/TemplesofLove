import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHolder from 'vue-holderjs'

Vue.use(VueHolder)
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
