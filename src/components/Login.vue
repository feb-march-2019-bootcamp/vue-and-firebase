<template>
  <div class="row">
      <div class="col"></div>
      <div class="col-md-5">
        <div class="form-group">
          <input type="text" class="form-control" v-model="me">
        </div>
        <div class="form-group">
          <button @click="login()" class="btn btn-success btn-block">Login</button>
        </div>
      </div>
      <div class="col"></div>
    </div>
</template>
<script>
import { state, setUser } from '../app-state.js'

export default {
  data: () => ({
    me: '',
  }),
  methods: {
    login() {
      if (!this.me) return;

      setUser(this.me);
      this.$router.push({path: '/messenger'})
    }
  }
}
</script>
