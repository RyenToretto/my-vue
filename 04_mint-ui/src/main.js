import Vue from 'vue'
import App from './App'

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);        // mt-button

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
