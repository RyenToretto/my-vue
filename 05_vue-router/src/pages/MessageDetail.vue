<template>
  <ul class="message_detail">
    <li>{{$route.params.id}}</li>
    <li>{{message.title}}</li>
    <li>{{message.content}}</li>
  </ul>
</template>

<script>
  const messages = [
    {id:1, title:"Time is running!", content: "时间紧迫啊！"},
    {id:3, title:"You gota working harder!", content: "更努力才行！"},
    {id:5, title:"Life is hard.", content: "生活不易！"}
  ];
  export default {
    name: 'Header',
    data () {
      return {
        message: {}
      }
    },
    mounted () {
      const id = this.$route.params.id * 1;
      
      // 查找对应的detail
      this.message = messages.find(detail => detail.id===id)
    },
    watch: {
      $route (value) { // value是$route的最新值
        const id = value.params.id * 1;
        
        // 查找对应的detail
        this.detail = messages.find(detail => detail.id===id);
      }
    }
  }
</script>

<style scoped>
  /* Header */
  
</style>
