<template>
    <div class="container">
        <div class="info">
            <div class="mail">
                <n-icon>
                    <Mail />
                </n-icon>
                <p>
                    sohaip@gmail.com
                </p>
            </div>
            <div class="tele">
                <n-icon>
                    <Phone />
                </n-icon>
                <p> 01550307485</p>
            </div>
            <div class="dropDown">
                <n-space>
                    <n-dropdown :show="langDropdownRef" :options="langOptions">
                        <n-button @click="langDropdownRef = !langDropdownRef;">
                            English
                            <n-icon>
                                <ChevronDown />
                            </n-icon>
                        </n-button>
                    </n-dropdown>
                </n-space>
                <n-space>
                    <n-dropdown :show="currDropdownRef" :options="currOptions">
                        <n-button @click="currDropdownRef = !currDropdownRef;">
                            USD
                            <n-icon>
                                <ChevronDown />
                            </n-icon>
                        </n-button>
                    </n-dropdown>
                </n-space>
                <router-link to="/Login">
                    Login
                    <n-icon>
                        <user />
                    </n-icon>
                </router-link>
                <n-icon class="ShoppingCart" size="22">
                    <ShoppingCart />
                </n-icon>
            </div>
        </div>
        <div class="head">
            <div class="navs">
                <h1>Hekto</h1>
                <router-link to="/">Home</router-link>
                <router-link to="/product-details">Products</router-link>
                <router-link to="/shop">Shop</router-link>
                <!-- <router-link to="/contact">Contact</router-link> -->
            </div>
            <div class="search">
                <input type="text">
                <button>
                    <n-icon>
                        <Search />
                    </n-icon>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Mail, Phone, Search, ChevronDown, User, Heart, ShoppingCart } from '@vicons/tabler'
import { NIcon, NSpace, NDropdown, NButton } from "naive-ui"
import { ref } from "vue";


const langDropdownRef = ref(false);
const langOptions = [
    {
        label: "English",
        key: "English"
    },
    {
        label: "Arabic",
        key: "Arabic"
    },
]
const currDropdownRef = ref(false);
const currOptions = [
    {
        label: "USD",
        key: "USD"
    },
    {
        label: "EUR",
        key: "EUR"
    },
]

</script>