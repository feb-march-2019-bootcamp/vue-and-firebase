import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { router } from './router'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
