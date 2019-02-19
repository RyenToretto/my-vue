<template>
  <div class="messages clearfix">
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="`/home/messages/message/${message.id}`">
          {{message.title}}
        </router-link>
        
        <div>
          <button @click="$router.push(`/home/messages/message/${message.id}`)" >
            Push 查看
          </button>
          <button @click="$router.replace(`/home/messages/message/${message.id}`)" >
            Replace 查看
          </button>
        </div>
      </li>
    </ul>
    <button @click="$router.back()" >回退 👈</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="$router.go(1)" >前进 👉</button><hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Messages',
    data () {
      return {
        messages: []
      }
    },
    mounted () {
      // 模拟发异步ajax请求获取数据
      setTimeout(() => {
        this.messages = [
          {id:1, title:"Time is running!", content: "时间紧迫啊！"},
          {id:3, title:"You gota working harder!", content: "更努力才行！"},
          {id:5, title:"Life is hard.", content: "生活不易！"}
        ]
      }, 1000)
    }
  }
</script>

<style scoped>
  /* Messages */
  .messages {
    height: 300px;
  }

  .messages ul {
    height: 216px;
  }

  .messages ul>li {
    display: flex;
    justify-content: space-between;
    background-color: #a08dab;
    height: 66px;
    margin-bottom: 6px;
  }

  .messages ul>li button {
    margin-left: 10px;
  }

</style>
