<template>
  <div>
    <input type="text" v-model="todoText" @keypress.enter="addTodo()">
    <h2>Todos</h2>
    <ul>
      <li v-for="todo in todos" v-text="todo.text" :key="todo.id"></li>
    </ul>
  </div>
</template>
<script>
import { FireApp } from "../firebase";

export default {
  props: {
    username: {type: String}
  },
  data: () => ({
    todoText: "",
    todosCollection: FireApp.firestore().collection('todos'),
    todos: [],
    unsubscribe: () => {}
  }),
  created() {
    this.unsubscribe = this.todosCollection
      .where('username', '==', this.username)
      .onSnapshot(s => {
      this.todos = s.docs.map(x => {
        return {
          id: x.id,
          ...x.data()
        };
      });
    });
  },
  destroyed() {
    console.log('Destroyed')
    this.unsubscribe();
  },
  methods: {
    addTodo() {
      this.todosCollection.add({ text: this.todoText, username: this.username });
    }
  }
};
</script>
