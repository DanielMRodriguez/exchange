import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home";
import About from "@/view/About";
import Error404 from "@/view/Error";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "**",
      name: "error",
      component: Error404
    }
  ]
});
