<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="row">
      <div class="col-10"></div>
      <div class="col">
        <button v-if="me" @click="logout()" class="btn btn-danger">
          Logout <i class="fa fa-sign-out-alt"></i>
       </button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import { state, setUser } from './app-state'

export default {
  name: 'app',
  components: {
    Login
  },
  computed: {
    me: () => state.me
  },
  methods: {
    logout() {
      setUser(null);

      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
