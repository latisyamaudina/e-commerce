import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index1";
import Register from "../views/Register.vue"
import Product from "../views/Product.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {

    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
      next("/"); // redirect to home 
  } else {
      next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
      next("/login"); 
  } else {
      next();
  }
});

export default router;