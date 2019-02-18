<template>
  <div class="app">
    <h1>vue-router</h1><hr />
    <div>
      <div class="left_nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="right_content">
        <keep-alive>
          <router-view msg="abc"><!--在此显示当前对应的路由组件--></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  .left_nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 48px;
    
    font-size: 18px;
    line-height: 48px;
    background-color: #5bc0de;
  }
  
  .right_content {
    width: 35%;
    height: 540px;
    margin-top: 20px;
    background-color: #edbaff;
  }
</style>
