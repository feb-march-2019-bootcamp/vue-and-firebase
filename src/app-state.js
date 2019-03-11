import Vue from 'vue';

export const state = Vue.observable({
  me: window.sessionStorage.getItem('user')
})

export const setUser = user => {

  // do AJAX request to the server

  window.sessionStorage.setItem('user', user)
  state.me = user;

  if (!user) {
    window.sessionStorage.removeItem('user');
  }
}