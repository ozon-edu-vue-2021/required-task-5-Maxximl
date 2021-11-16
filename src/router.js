import Vue from "vue";
import VueRouter from "vue-router";
import ProductsPage from "./pages/ProductsPage.vue";
import CartPage from "./pages/CartPage.vue";
import FavoritePage from "./pages/FavoritePage.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/products", component: ProductsPage },
  { path: "/cart", component: CartPage },
  { path: "/favorite", component: FavoritePage },
];

export const router = new VueRouter({
  routes,
});
