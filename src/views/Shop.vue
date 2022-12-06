<template>
    <navs />
    <div class="shopGrid">
        <h1>Shop Grid Default</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a @click.prevent="showNavs = !showNavs" href="">Shop Grid Default</a>
        </div>
        <Transition>
            <div class="clicked" v-if="showNavs">
                <ul>
                    <router-link to="/shop-list">
                        <li>Shop List</li>
                    </router-link>
                    <router-link to="/shop-left">
                        <li>Shop Left</li>
                    </router-link>
                    <router-link to="/login">
                        <li>My Account</li>
                    </router-link>
                </ul>
            </div>
        </Transition>
    </div>
    <h1 class="headEcommerce ">Ecommerce Acceoris & Fashion</h1>
    <div class="acceoris">
    </div>
    <Acceoris :items="shopProducts" />
    <Footer />
</template>
<script async setup>
import navs from '@/components/navs.vue'
import Acceoris from '@/components/Acceoris.vue'
import Footer from '@/components/footer.vue'
import { ref } from 'vue';
import axios from 'axios'
const shopProducts = ref([])
const getshopProducts = await axios.get('/api/shop');
shopProducts.value = getshopProducts.data
const showNavs = ref(false)
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