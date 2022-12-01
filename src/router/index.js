import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import ShopList from "../views/ShopList.vue";
import ShopLeft from "../views/ShopLeft.vue";
import ProductDetails from "../views/ProductDetails.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import CompletedOrders from "../views/CompletedOrders.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/shop-list",
      name: "shop-list",
      component: ShopList,
    },
    {
      path: "/shop-left",
      name: "shop-left",
      component: ShopLeft,
    },
    {
      path: "/product-details/:id",
      name: "product-details",
      component: ProductDetails,
    },
    {
      path: "/shopping-cart",
      name: "shopping-cart",
      component: ShoppingCart,
    },
    {
      path: "/completed-order",
      name: "completed-order",
      component: CompletedOrders,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
