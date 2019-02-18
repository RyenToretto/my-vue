import Vue from 'vue'
import App from './App'
import router from "./router"

new Vue({
  el: '#root',
  components: {
    App
  },
  template: '<App/>',
  router    // 配置路由器
});
