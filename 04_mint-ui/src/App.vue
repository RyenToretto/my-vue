<template>
  <mt-button type="primary" @click="hint" style="width: 100%;">测试按钮</mt-button>
</template>

<script>
  import Header from "./components/Header"
  import { Toast } from 'mint-ui';    // 漂浮的提示 插件
  
  export default {
    name: 'App',
    components: {
      Header
    },
    data (){
      return {
      
      }
    },
    methods: {
      hint () {
        Toast('提示信息')
      }
    }
  }
</script>

<style>

</style>
