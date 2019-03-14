import Router from 'vue-router';
import Messenger from './components/Messenger.vue'
import Login from './components/Login.vue'
import Contact from './components/Contact.vue';

const routes = [
  {path: '/', component: Login},
  {path: '/messenger', component: Messenger, props: true},
  {path: '/contact', component: Contact, props: true}
]

export const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})