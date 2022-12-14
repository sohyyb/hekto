<template>
    <navs />
    <div class="shoppingCart">
        <h1>Shopping Cart</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a href="">Shopping Cart</a>
        </div>
    </div>
    <div class="Container">
        <div class="Products">
            <div class="header">
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Total</h1>
            </div>
            <div class="Product" v-for="product in cartProducts">
                <div class="images">
                    <div class="image">
                        <img :src="product.images[0]" alt="">
                        <div class="Desc">
                            <p class="Title"> {{ product.title }}</p>
                        </div>
                    </div>
                </div>
                <div class="Price">
                    <p>${{ product.price }} </p>
                </div>
                <div class="quantity">
                    <div class="buttons">
                        <button @click.prevent="store.decreaseQuantity(product.id)"
                            :disabled="product.quantity == 1 ? true : false" class="decrease">-</button>
                        <p>{{ product.quantity }}</p>
                        <button @click.prevent="store.increaseQuantity(product.id)">+</button>
                    </div>
                </div>
                <div class="total">
                    <p>${{ product.price * product.quantity }}</p>
                </div>
            </div>
        </div>
        <div class="cartTotals">
            <h1>Cart Total</h1>
            <div class="subTotal">
                <p>Subtotals:</p>
                <p>${{ cartProducts.reduce((acc, product) => {
                        return acc += +product.price * product.quantity
                    }, 0)
                }}</p>
            </div>
            <div class="Totals">
                <p>Totals:</p>
                <p>${{ cartProducts.reduce((acc, product) => {
                        return acc += +product.price * product.quantity
                    }, 0)
                }}</p>
            </div>
            <div class="shipping">
                <n-icon :size="10" color="white" class="check">
                    <Check />
                </n-icon>
                <p>shipping & takes calculated at checkout</p>
            </div>
            <router-link to="/completed-order">
                <button>proceed to checkout</button>
            </router-link>
        </div>
    </div>
    <Footer />
</template>
<script async setup>
import navs from '@/components/navs.vue'
import Footer from '@/components/footer.vue'
import { Check } from '@vicons/tabler'
import { NIcon } from "naive-ui"
import { ref, watch } from 'vue';
import { useCartStore } from '../stores/cart';
import axios from 'axios';
const store = useCartStore()
const cartProducts = ref([])
const allProducts = await axios.get('/api/items.json')

function readLoop(allp) {
    cartProducts.value = []
    allProducts.data.forEach(product => {
        store.products.forEach(storeProduct => {
            if (storeProduct.id == product.id) {
                cartProducts.value.push({ ...product, quantity: storeProduct.quantity })
            }
        })
    })
}
readLoop(store.products)
watch(() => store.products, (newValue, oldValue) => {
    readLoop(newValue);
    return true
})

</script>