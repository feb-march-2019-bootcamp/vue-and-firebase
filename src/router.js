import Router from 'vue-router';
import Messenger from './components/Messenger.vue'
import Login from './components/Login.vue'

const routes = [
  {path: '/', component: Login},
  {path: '/messenger', component: Messenger, props: true}
]

export const router = new Router({
  routes,
})