<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="row">
      <div class="col"></div>
      <div class="col-md-5">
        <div class="form-group">
          <input type="text" class="form-control" v-model="me">
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <ul>
          <li v-for="user in users" 
            :key="user.id"
            :class="{'active btn btn-success': selectedUser===user.username}"
            @click="selectedUser=user.username"
            v-text="user.username"></li>
        </ul>
      </div>
      <div class="col-md-8">
        <chat v-if="selectedUser"
         :me="me" :to="selectedUser"
         @send-message="sendMessage"
          :messages="selectedMessages"></chat>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './components/Chat.vue';
import { FireApp } from './firebase';

export default {
  name: 'app',
  components: {
    Chat
  },
  data: () => ({
    me: '',
    messages: [],
    selectedUser: '',
    users: [],

    usersCollection: FireApp.firestore().collection('users'),
    messagesCollection: FireApp.firestore().collection('messages'),

    unsubscribeFromMessages: () => {},
    unsubscribeFromUsers: () => {},
  }),
  methods: {
    sendMessage(message) {
      this.messagesCollection.add(message);
    }
  },
  computed: {
    selectedMessages() {
      return this.messages.filter(
        (x => (x.to === this.selectedUser
        &&
        x.from === this.me)
        || (
          x.to === this.me
          && 
          x.from === this.selectedUser
        ))
        );
    }
  },
  created() {
    this.unsubscribeFromUsers = this.usersCollection
      .onSnapshot(s => {
        this.users = s.docs.map(x => {
          return {username: x.id, ...x.data()};
        })
    })

    this.unsubscribeFromMessages = this.messagesCollection
      .orderBy('time', 'asc')
      .onSnapshot(s => {
        this.messages = s.docs.map(x => {
          return {id: x.id, ...x.data()}
        })
      })
  },
  destroyed() {
    this.unsubscribeFromMessages();
    this.unsubscribeFromUsers();
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
