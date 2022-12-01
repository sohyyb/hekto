import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: JSON.parse(localStorage.getItem("products")) || null,
  }),
  actions: {
    decreaseQuantity(id) {
      const product = this.products.find((product) => product.id === id);
      product.quantity--;
      localStorage.setItem("products", JSON.stringify(this.products));
      this.products = JSON.parse(localStorage.getItem("products"));
    },
    increaseQuantity(id) {
      const product = this.products.find((product) => product.id === id);
      product.quantity++;
      localStorage.setItem("products", JSON.stringify(this.products));
      this.products = JSON.parse(localStorage.getItem("products"));
    },
    addProducts(id) {
      if (this.products != null) {
        let cartProducts = this.products;
        let product = cartProducts.find((product) => product.id === id);
        if (product) product.quantity += 1;
        else cartProducts.push({ id, quantity: 1 });
        localStorage.setItem("products", JSON.stringify(cartProducts));
      } else {
        let cartProducts = [];
        cartProducts.push({ id, quantity: 1 });
        this.products = cartProducts;
        localStorage.setItem("products", JSON.stringify(cartProducts));
      }
    },
  },
});
