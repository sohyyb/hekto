<template>
    <navs />
    <div class="shopList">
        <h1>Shop List</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a @click.prevent="showNavs = !showNavs" href="">Shop List</a>
        </div>
        <Transition>
            <div class="clicked" v-if="showNavs">
                <ul>
                    <router-link to="/shop-left">
                        <li>Shop Left</li>
                    </router-link>
                    <router-link to="/shop">
                        <li>Shop Grid</li>
                    </router-link>
                    <router-link to="/login">
                        <li>My Account</li>
                    </router-link>
                </ul>
            </div>
        </Transition>
    </div>
    <h1 class="headEcommerce ">Ecommerce Acceoris & Fashion</h1>
    <div class="items">
        <shoplist :items="shopListx" />
    </div>
    <Footer />
</template>
<script async setup>
import navs from '@/components/navs.vue'
import Footer from '@/components/footer.vue'
import shoplist from '@/components/shopList.vue'
import { ref } from 'vue';
import axios from 'axios'
const showNavs = ref(false)
const shopListx = ref([])
const getshopList = await axios.get("http://localhost:3000/api/shopList")
shopListx.value = getshopList.data
</script>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>