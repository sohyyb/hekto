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
            <div class="Product" v-for="n in 6">
                <div class="images">
                    <div class="image">
                        <img src="../assets/images/bag.png" alt="">
                        <div class="Desc">
                            <p class="Title"> Ut Diam Vel</p>
                            <p class="Color">Red</p>
                            <p class="size">Size: XL</p>
                        </div>
                    </div>
                </div>
                <div class="Price">
                    <p>${{ price }} </p>
                </div>
                <div class="quantity">
                    <div class="buttons">
                        <button @click.prevent="count > 1 && count--" :disabled="count == 1 ? true : false"
                            class="decrease">-</button>
                        <p>{{ count }}</p>
                        <button @click.prevent="count++">+</button>
                    </div>
                </div>
                <div class="total">
                    <p>${{ price * count }}</p>
                </div>
            </div>
        </div>
        <div class="cartTotals">
            <h1>Cart Total</h1>
            <div class="subTotal">
                <p>Subtotals:</p>
                <p>$220</p>
            </div>
            <div class="Totals">
                <p>Totals:</p>
                <p>$1000</p>
            </div>
            <div class="shipping">
                <n-icon :size="10" color="white" class="check">
                    <Check />
                </n-icon>
                <p>shipping & takes calculated at checkout</p>
            </div>
            <button>proceed to checkout</button>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import navs from '@/components/navs.vue'
import Footer from '@/components/footer.vue'
import { Check } from '@vicons/tabler'
import { NIcon } from "naive-ui"
import { ref } from 'vue';
const count = ref(1)
const price = ref(120)
const total = ref(price)
</script>