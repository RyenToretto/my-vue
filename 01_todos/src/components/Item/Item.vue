<template>
  <li :style="{'background-color': bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" >
    <label>
      <input type="checkbox" v-model="todo.isDone"/>
      <span>{{todo.title}}</span>
    </label>
    <button @click="deleteTodo(index)" class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  data () {
    return {
      bgColor: "#fff",
      isShow: false,
    }
  },
  methods: {
    handleEnter(isEnter){
      this.bgColor = isEnter?"#ccc":"#fff";
      this.isShow = isEnter;
    }
  }
}
</script>

<style scoped>
  /* Item */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  
  li label {
    float: left;
    cursor: pointer;
  }
  
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  
  li button {
    float: right;
    display: block;
    margin-top: 3px;
  }
  
  li:before {
    content: initial;
  }
  
  li:last-child {
    border-bottom: none;
  }
</style>
