<template>
  <div>
    <ul class="list-group">
      <li v-for="m in messages"
        class="list-group-item"
        :class="{'list-group-item-primary': m.from === me}"
        :key="m.id">
        <div class="row">
          <div class="col-8">
            <span v-text="m.text"></span>
          </div>
          <div class="col-4">
            <small v-text="formatTime(m.time)"></small>
          </div>
        </div>
      </li>
    </ul>
    <div class="form-group">
      <input type="text" class="form-control" v-model="newMessage">
    </div>
    <div class="form-group">
      <button 
        @click="$emit('send-message', {text:newMessage, to, from: me, time: new Date()}); newMessage=''" class="btn btn-success btn-block">
        Send
      </button>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  props: {
    messages: {type: Array},
    me: {type: String},
    to: {type: String}
  },
  data: () => ({
    newMessage: ''
  }),
  methods: {
    formatTime(time) {
      return moment(time.toDate()).fromNow();
      
    }
  }
}
</script>
