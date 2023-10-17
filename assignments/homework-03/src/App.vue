<script setup>
import { ref } from 'vue'
const todoList = ref([]);
const input = ref('');

const inputTodo = () => {
  todoList.value.push(input.value);
}

const clearInput = () => {
  todoList.value = [];
}
</script>
<template>
  <div class="todo-app">
    <h2>TODO list</h2>
    <div class="input-container">
      <input v-model="input" type="text" placeholder="Add a new task" />
      <button @click="inputTodo">Add</button>
      <button @click="clearInput">Clear</button>
    </div>
    <ol class="todo-list">
      <li v-for="todo in todoList" :key="todo">{{ todo }}</li>
    </ol>
  </div>
</template>

<style scoped>
.todo-app {
  text-align: center;
  padding: 20px;
}

.input-container {
  margin: 20px 0;
}

input {
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #0b5cb2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1c86f8;
}

.todo-list {
  list-style: decimal inside;
  padding-left: 0;
  text-align: left;
}

li {
  margin: 10px 0;
}
</style>
