<template>
  <div class="vertical-container">
    <main>
      <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <router-link :to="{path: '/', query: {id: 'foo'}}" class="nav-link">
              Home
            </router-link>
            <router-link to="/messenger" class="nav-link">
              Messenger
            </router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
    </main>
    <footer class="bg-info py-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div>
              <router-link class="text-white" to="/messenger">Messenger 1</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 2</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 3</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 4</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <router-link class="text-white" to="/messenger">Messenger 1</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 2</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 3</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 4</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <router-link class="text-white" to="/messenger">Messenger 1</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 2</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 3</router-link>
            </div>
            <div>
              <router-link class="text-white" to="/messenger">Messenger 4</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
}

.vertical-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.vertical-container .footer {
  
}
</style>
