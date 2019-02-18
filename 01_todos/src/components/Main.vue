<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :todo="todo" :key="index" :index="index" :deleteTodo="deleteTodo"></Item>
  </ul>
</template>

<script>
  import Item from "./Item/Item"
  export default {
    name: 'Main',
    props: {
      todos: {
        type: Array,
        required: true
      },
      deleteTodo: {
        type: Function,
        required: true
      }
    },
    components: {
      Item
    }
  }
</script>

<style scoped>
  /* Main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
