<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <Main :todos="todos" :deleteTodo="deleteTodo"></Main>
      <Footer :deleteDone="deleteDone" :selectAll="selectAll" :todos="todos"></Footer>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Main from "./components/Main"
  import Footer from "./components/Footer"
  
  import mylocalStorage from "./utils/mylocalStorage"
  
  export default {
    name: 'App',
    components: {
      Header,
      Main,
      Footer,
    },
    data (){
      return {
        todos: mylocalStorage("todos")
      }
    },
    watch: {
      todos: {
        deep: true,
        handler: function (newValue) {
          mylocalStorage("todos", newValue)
        }
      }
    },
    methods: {
      addTodo(newTitle){
        if(newTitle.trim() !== ""){
          this.todos.push({title: newTitle, isDone: false});
        }
      },
      deleteTodo (index) {
        this.todos.splice(index, 1);
      },
      deleteDone () {
        this.todos = this.todos.filter(todo => !todo.isDone)
      },
      selectAll (check) {    // 对所有todo进行选中/不选中
        this.todos.forEach(todo => todo.complete = check)
      }
    }
  }
</script>

<style>
body {
  background: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
