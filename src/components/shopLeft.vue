<template>
    <div class="items">
        <div class="item" v-for="item in items">
            <router-link :to="`/product-details/${item.id}`" class="router-link">
                <img :src="item.images[0]" />
            </router-link>
            <div class="desc">
                <div class="Title">
                    <h2 class="title">{{ item.title }}</h2>
                    <div class="colors">
                        <div class="color" v-for="color in item.colors" :style="{ background: color }"></div>
                    </div>
                </div>
                <h3 class="code">{{ item.code }}</h3>
                <div class="price">
                    <p>${{ item.price }}</p>
                    <p class="sale">${{ item.sale }}</p>
                    <n-icon>
                        <Star color="#FFC416" />
                    </n-icon>
                    <n-icon>
                        <Star color="#FFC416" />
                    </n-icon>
                    <n-icon>
                        <Star color="#FFC416" />
                    </n-icon>
                    <n-icon>
                        <Star color="#FFC416" />
                    </n-icon>
                </div>
                <div class="icons">
                    <n-icon @click.prevent="addCart(item.id)">
                        <ShoppingCart />
                    </n-icon>
                    <n-icon>
                        <Heart />
                    </n-icon>
                    <n-icon>
                        <ZoomIn />
                    </n-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ZoomIn, Heart, ShoppingCart, Star } from "@vicons/tabler";
import { NIcon } from "naive-ui";
import { useCartStore } from "../stores/cart";
const store = useCartStore()
const props = defineProps(["items"]);
const addCart = (id) => {
    store.addProducts(id)
}
</script>