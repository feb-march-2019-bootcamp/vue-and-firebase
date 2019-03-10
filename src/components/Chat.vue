<template>
  <div>
    <ul class="list-group">
      <li v-for="m in messages"
        class="list-group-item"
        :class="{'list-group-item-primary': m.from === me}"
        v-text="m.text"
       :key="m.id">

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
export default {
  props: {
    messages: {type: Array},
    me: {type: String},
    to: {type: String}
  },
  data: () => ({
    newMessage: ''
  })
}
</script>
