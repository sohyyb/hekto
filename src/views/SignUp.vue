<template>
    <navs />
    <div class="sign">
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
    <div class="signUp">
        <h1>Sign Up</h1>
        <p>Please Enter Your Infromation</p>
        <input type="text" placeholder="Full name" v-model="form.name">
        <input type="text" placeholder="Email-Address" v-model="form.email">
        <input type="password" placeholder="Password" v-model="form.password">
        <p>Please Sign Up</p>
        <button @click="addUser">sign Up</button>
        <div class="acc">
            <span>Are You Have An Account?</span>
            <router-link to="/login">
                Login
            </router-link>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import navs from '@/components/navs.vue';
import Footer from '@/components/footer.vue'
import { ref } from 'vue';
import axios from "axios"
import router from "@/router"

const showNavs = ref(false)

const form = ref({
    name: "",
    email: "",
    password: ""
})

const addUser = async () => {
    try {
        const recUser = await axios.post('/auth/register', form.value)
        router.push('/login')
    } catch (err) {
        console.log(err);
    }

}
</script>