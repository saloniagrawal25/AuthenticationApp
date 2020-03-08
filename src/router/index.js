import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Home from "../components/Layouts/Home.vue";
import Panel from "../components/Panel.vue";
import SignUp from "../components/Layouts/SignUp.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/signUp",
    component: SignUp
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
