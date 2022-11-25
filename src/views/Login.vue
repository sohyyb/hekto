<template>
    <navs />
    <div class="login">
        <h1>My Account</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a @click.prevent="showNavs = !showNavs" href="">My Account</a>
        </div>
        <Transition>
            <div class="clicked" v-if="showNavs">
                <ul>
                    <router-link to="/shop-list">
                        <li>Shop List</li>
                    </router-link>
                    <router-link to="/shop">
                        <li>Shop Grid</li>
                    </router-link>
                    <router-link to="/shop-left">
                        <li>Shop Left</li>
                    </router-link>
                </ul>
            </div>
        </Transition>
    </div>
    <div class="log">
        <h1>Login</h1>
        <p>Please Login Using Account Detalis Bellow</p>
        <input type="text" placeholder="Email-Address">
        <input type="text" placeholder="Password">
        <p>Forgot Your Password?</p>
        <button>sign In</button>
        <p>Don,t Have Account?Create Account</p>
    </div>
    <Footer />
</template>
<script setup>
import navs from '@/components/navs.vue';
import Footer from '@/components/footer.vue';
import { ref } from 'vue';
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