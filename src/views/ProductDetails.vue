<template>
    <navs />
    <div class="productsDetils">
        <h1>Products Detils</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a href="">Products Detils</a>
        </div>
    </div>
    <h1 class="headEcommerce ">Ecommerce Acceoris & Fashion</h1>
    <div class="carts">
        <div class="cart">
            <div class="images">
                <img :src="filteredProduct[0].images[1]" alt="">
                <img :src="filteredProduct[0].images[2]" alt="">
                <img :src="filteredProduct[0].images[3]" alt="">
            </div>
            <div class="cart">
                <img :src="filteredProduct[0].images[0]" alt="">
                <div class="desc">
                    <div class="color">
                        <p>{{ filteredProduct[0].title }}</p>
                        <div class="colors">
                            <div class="red"></div>
                            <div class="aqua"></div>
                            <div class="navy"></div>
                        </div>
                    </div>
                    <div class="price">
                        <p class="after-sale">$260</p>
                        <p class="befor-sale">$460</p>
                    </div>
                    <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto dolor
                        opti</p>
                    <div class="icons">
                        <n-icon @click.prevent="addCart(filteredProduct[0].id)" class="search">
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
    </div>
    <div class="detils">
        <div class="links">
            <a href="">Description</a>
            <a href="">Additional Info</a>
            <a href="">Reviews</a>
            <a href="">Video</a>
        </div>
        <div class="description">
            <h3>Description</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate perspiciatis debitis, beatae
                reiciendis velit adipisci earum fuga eius impedit, eos eligendi labore laboriosam numquam sint vitae
                atque. Blanditiis, nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem tempore iste
                placeat commodi doloremque est labore explicabo veniam et asperiores facilis, corporis expedita quia
                earum obcaecati nisi nam quidem sint? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                cumque, asperiores iste vero quod, dolores amet, quas nesciunt repellendus atque suscipit debitis sed id
                ipsum nobis eius cupiditate saepe similique.</p>
        </div>
        <div class="moreDetils">
            <h3>More Detils</h3>
            <div class="lorem">
                <n-icon>
                    <ArrowRight />
                </n-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa libero, in vel dolor</p>
            </div>
            <div class="lorem">
                <n-icon>
                    <ArrowRight />
                </n-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa libero, in vel dolor</p>
            </div>
            <div class="lorem">
                <n-icon>
                    <ArrowRight />
                </n-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa libero, in vel dolor</p>
            </div>
            <div class="lorem">
                <n-icon>
                    <ArrowRight />
                </n-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa libero, in vel dolor</p>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script async setup>
import navs from '@/components/navs.vue'
import Footer from '@/components/footer.vue'
import { ZoomIn, Heart, ShoppingCart, ArrowRight } from '@vicons/tabler'
import { NIcon } from "naive-ui"
import axios from 'axios'
import { ref } from 'vue'
import router from '../router'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'
const store = useCartStore()
const id = useRoute().params.id;
const product = ref([])
const getProductDetails = await axios.get('/api/items')
const filteredProduct = getProductDetails.data.filter(item => {
    if (item.id == id) {
        return item;
    }
})
const addCart = (id) => {
    store.addProducts(id)
}
</script>