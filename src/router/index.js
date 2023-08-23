import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index1";
import Register from "../views/Register.vue"

import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import Checkout from "../views/Checkout.vue";
import Merk from "../views/Merk.vue";
import Kategori from "../views/Kategori.vue";
import Profile from "../views/Profile.vue";
import Produk from "../views/Produk.vue"
import singleproduk from "../views/SingleProduk.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/merk",
    name: "Merk",
    component: Merk,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
},
{
    path: '/produk/:id',
    name: 'SingleProduk',
    component: singleproduk
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