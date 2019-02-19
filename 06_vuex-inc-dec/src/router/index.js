import Vue from "vue";
import VueRouter from "vue-router";

import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Messages from "../pages/Messages"
import MessageDetail from "../pages/MessageDetail"

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",    // 路由不带 #，即不使用 hash 路由
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/news",
          component: News
        },
        {
          path: "/home/messages",
          component: Messages,
          children: [
            {
              path: "/home/messages/message/:id",
              component: MessageDetail
            }
          ]
        },
        {
          path: "",
          redirect: "/home/news"
        }
      ]
    },
    {
      path: "",
      redirect: "/about"
    }
  ]
})
