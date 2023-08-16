import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index1";
import Register from "../views/Register.vue"
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import Checkout from "../views/Checkout.vue";

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
    path: "/singleproduct",
    name: "SingleProduct",
    component: SingleProduct,
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
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
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