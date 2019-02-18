<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成 {{doneCount}}</span> / 全部 {{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="doneCount>0" @click="deleteDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    todos: {
      type: Array
    },
    deleteDone: {
      type: Function
    },
    selectAll: {
      type: Function
    }
  },
  computed: {
    doneCount () {    // 已完成的数量
      return this.todos.reduce((pre, todo) => pre + (todo.isDone ? 1 : 0), 0)
    },
    checkAll: {    // 是否全选中
      get () {
        return this.todos.length === this.doneCount && this.doneCount>0
      },
      set (value) {
        this.selectAll(value)
      }
    }
  }
}
</script>

<style scoped>
  /* Footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
