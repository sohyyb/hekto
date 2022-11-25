<template>
    <navs />
    <div class="shopLeft">
        <h1>Shop Left Sidebar</h1>
        <div class="link">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a @click.prevent="showNavs = !showNavs" href="">Shop Left </a>
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
                    <router-link to="/login">
                        <li>My Account</li>
                    </router-link>
                </ul>
            </div>
        </Transition>
    </div>
    <h1 class="headEcommerce ">Ecommerce Acceoris & Fashion</h1>
    <div class="products">
        <div class="sideBar">
            <div class="productBrand">
                <h3>Product Brand</h3>
                <div class="checks">
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Coaster Furniture</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Coaster Furniture</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Coaster Furniture</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Coaster Furniture</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Coaster Furniture</p>
                    </div>
                </div>
            </div>
            <div class="discount">
                <h3>Discount Offer</h3>
                <div class="checks">
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>20% Cashback</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>5% Cashback Offer</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>25% Discount Offer</p>
                    </div>
                </div>
            </div>
            <div class="rating">
                <h3>Rating Item</h3>
                <div class="rate">
                    <n-icon color="#FFC416">
                        <Check />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <p>(2314)</p>
                </div>
                <div class="rate">
                    <n-icon color="#FFC416">
                        <Check />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <p>(2314)</p>
                </div>
                <div class="rate">
                    <n-icon color="#FFC416">
                        <Check />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <n-icon color="#FFC416">
                        <Star />
                    </n-icon>
                    <p>(2314)</p>
                </div>
            </div>
            <div class="categories">
                <h3>Categories</h3>
                <div class="checks">
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Magento</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Magento</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Magento</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Magento</p>
                    </div>
                    <div class="check">
                        <n-icon color="#fb2e86">
                            <Check />
                        </n-icon>
                        <p>Magento</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="items">
            <div class="item">
                <img src="../assets/images/Rectangle 38.png" alt="">
                <div class="desc">
                    <div class="color">
                        <p> In Nulla</p>
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
                    <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto dolor opti
                    </p>
                    <div class="icons">
                        <n-icon>
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
            <div class="item">
                <img src="../assets/images/Rectangle 39.png" alt="">
                <div class="desc">
                    <div class="color">
                        <p> In Nulla</p>
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
                    <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto dolor opti
                    </p>
                    <div class="icons">
                        <n-icon>
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
            <div class="item">
                <img src="../assets/images/Rectangle 40.png" alt="">
                <div class="desc">
                    <div class="color">
                        <p> In Nulla</p>
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
                    <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto dolor opti
                    </p>
                    <div class="icons">
                        <n-icon>
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
            <div class="item">
                <img src="../assets/images/Rectangle 41.png" alt="">
                <div class="desc">
                    <div class="color">
                        <p> In Nulla</p>
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
                    <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto dolor opti
                    </p>
                    <div class="icons">
                        <n-icon>
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
        </div> -->
        <ShopLeft :items="shopLeft" />
    </div>
    <Footer />
</template>
<script async setup>
import navs from '@/components/navs.vue';
import Footer from '@/components/footer.vue';
import ShopLeft from '../components/shopLeft.vue';
import { Check, Star, ShoppingCart, Heart, ZoomIn } from '@vicons/tabler';
import { NIcon } from "naive-ui"
import { ref } from 'vue';
import axios from 'axios';
const showNavs = ref(false)
const shopLeft = ref([])
const getshopLeft = await axios.get("http://localhost:3000/shopLeft")
shopLeft.value = getshopLeft.data
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