<template>
  <div class="home">
    <h3 class="content_title">
      <router-link to="/home/news">News</router-link>
      <router-link to="/home/messages">Messages</router-link>
    </h3>
    <hr/>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  /* Home */
  .home {
    width: 100%;
    height: 540px;
    background-color: #4cae4c;
  }

  .content_title {
    display: flex;
    justify-content: space-around;
  
    font-size: 16px;
    line-height: 32px;
    background-color: #ae874a;
  }
</style>
