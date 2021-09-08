import Vue from "vue";
import Router from "vue-router";
import Todo from "../components/Todo.vue";
import Chat from "../components/Chat.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Todo,
      name: "Home",
    },
    {
      path: "/chat",
      component: Chat,
    },
  ],
});
