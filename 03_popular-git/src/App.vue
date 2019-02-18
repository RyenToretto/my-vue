<template>
  <div class="container">
    <Header></Header>
    <h2 v-if="isFirst">Git 用户搜索</h2>
    <h2 v-else-if="isSearching">searching...</h2>
    <h2 v-else-if="isError">{{errMsg}}</h2>
    <Main v-else :users="users"></Main>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Main from "./components/Main"
  import {PubSub} from "pubsub-js"
  import axios from "axios"
  
  export default {
    name: 'App',
    components: {
      Header,
      Main
    },
    data (){
      return {
        users: [],
        isFirst: true,
        isSearching: false,
        isError: false,
        errMsg: ""
      }
    },
    mounted () {
      PubSub.subscribe("search", (msgName, searchName)=>{
        this.isFirst = false;
        this.isSearching = true;
        const url = "https://api.github.com/search/users?q="+searchName;
        axios.get(url).then((response=>{
          const result = response.data;
          const {login, avatar_url, html_url} = result.items[0];
          this.users = result.items.map(user=>({
            name: user.login,
            homeUrl: user.html_url,
            headImg: user.avatar_url,
          }));
          this.isSearching = false;
        })).catch(err=>{
          this.errMsg = err;
          this.isSearching = false;
          this.isError = true;
        })
      })
    }
  }
</script>

<style>

</style>
