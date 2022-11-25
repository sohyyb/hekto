<template>
    <div class="infos">
        <div class="product-card" v-for="item in items">
            <router-link :to="`/product-details/${item.id}`" class="router-link">
                <img :src="item.images[0]" style="max-width:100px" />
                <h2 class="title">{{ item.title }}</h2>
                <div class="colors">
                    <div class="color" v-for="color in item.colors" :style="{ background: color }"></div>
                </div>
                <h3 class="code"> {{ item.code }}</h3>
                <p class="price">${{ item.price }}</p>
            </router-link>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['items']);
</script>