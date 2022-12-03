<template>
    <navs />
    <div class="completedOrders">
        <h1>Completed Orders</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a href="">Completed Orders</a>
        </div>
    </div>
    <div class="done">
        <img src="/images/clock1.png" alt="">
        <div class="desc">
            <n-icon color="#fb2e86" size="50px">
                <Check />
            </n-icon>
            <h1>Your Order Is Completed!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit, molestias libero dolore
                possimus quisquam mollitia hic dolorem fugiat sunt. Tempora ex ratione laborum et fugit dolorum
                quibusdam aspernatur ea!</p>
            <router-link to="/">
                <button>Continue Shopping</button>
            </router-link>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import navs from '@/components/navs.vue';
import Footer from '@/components/footer.vue'
import { Check } from '@vicons/tabler'
import { NIcon } from "naive-ui"
</script>