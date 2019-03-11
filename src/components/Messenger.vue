<template>
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
</template>
<script>
import Chat from './Chat.vue';
import { FireApp } from '../firebase';
import { state } from '../app-state.js'

export default {
  name: 'messenger',
  components: {
    Chat
  },
  data: () => ({
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
    me: () => state.me,
    selectedMessages() {
      return this.messages.filter(
        x => (
        (x.to === this.selectedUser
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
    if (!this.me) {
      this.$router.push('/');
    }

    this.unsubscribeFromUsers = this.usersCollection
      .onSnapshot(s => {
        this.users = s.docs
          .filter(x => x.id !== this.me)
          .map(x => {
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
