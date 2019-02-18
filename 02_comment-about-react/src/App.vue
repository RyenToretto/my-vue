<template>
  <div>
    <Header></Header>
    <div class="container">
      <AddComment></AddComment>
      <Comments></Comments>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import AddComment from "./components/AddComment"
  import Comments from "./components/Comments"
  
  export default {
    name: 'App',
    components: {
      Header,
      AddComment,
      Comments
    },
    data (){
      return {
      
      }
    },
    methods: {
    
    }
  }
</script>

<style>

</style>
