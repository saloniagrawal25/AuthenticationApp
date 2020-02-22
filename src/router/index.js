import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Home from "../components/Layouts/Home.vue";
import Panel from "../components/Panel.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/panel",
    component: Panel,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "/about",
        name: "About",
        component: About
      }
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
