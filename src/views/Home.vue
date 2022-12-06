<template>
    <navs />
    <div class="header">
        <img src="/images/lamb.svg" alt="" class="lamb">
        <div class="desc">
            <p>Best Furniture For Your Castle...</p>
            <h1>New Furniture Collection Trends In 2022</h1>
            <button>Shop Now</button>
        </div>
        <img src="/images/discount.svg" alt="" class="discount">
    </div>
    <h1 class="featuredProducts">Featured Products</h1>
    <Product :items="featuredProducts" />
    <h1 class="LeatestProducts">Leatest Products</h1>
    <div class="links">
        <n-tabs animated justify-content="center">
            <n-tab-pane name="new-arrival" tab="New Arrival">
                <leatestProducts :items="leatestProduct" />
            </n-tab-pane>
            <n-tab-pane name="best-seller" tab="Best Seller">
                <leatestProducts :items="leatestProduct" />
            </n-tab-pane>
            <n-tab-pane name="special-offer" tab="Special Offer">
                <leatestProducts :items="leatestProduct" />
            </n-tab-pane>
        </n-tabs>
    </div>
    <h1 class="shopex">What Shopex Offer</h1>
    <div class="cards">
        <div class="card">
            <img src="/images/free-delivery-1.png" alt="">
            <p class="work">24/7 support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi maiores blanditiis, facere
            </p>
        </div>
        <div class="card">
            <img src="/images/cashback-1.png" alt="">
            <p class="work">24/7 support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi maiores blanditiis, facere
            </p>
        </div>
        <div class="card">
            <img src="/images/Group.png" alt="">
            <p class="work">24/7 support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi maiores blanditiis, facere
            </p>
        </div>
        <div class="card">
            <img src="/images/24hours-support-1.png" alt="">
            <p class="work">24/7 support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi maiores blanditiis, facere
            </p>
        </div>
    </div>
    <div class="uniqueProducts">
        <img src="/images/Home-Stylish.png" alt="">
        <div class="head">
            <h1>Unique Featuers Of Leatest & Trending Products</h1>
            <div class="des">
                <div class="red"></div>
                <p class="inf">All Frames Constructeed With Hardwood Solids And Lamintes</p>
            </div>
            <div class="des">
                <div class="navy"></div>
                <p class="inf">All Frames Constructeed With Hardwood Solids And Lamintes</p>
            </div>
            <div class="des">
                <div class="aqua"></div>
                <p class="inf">All Frames Constructeed With Hardwood Solids And Lamintes</p>
            </div>
            <div class="addToCart">
                <button>Add To Cart</button>
                <div class="prices">
                    <p>B&B Italian Sofa</p>
                    <p>$320</p>
                </div>
            </div>
        </div>
    </div>
    <div class="trendingProducts">
        <h1>Trending Products</h1>
        <Product :items="trendProducts" />
        <div class="products">
            <div class="product">
                <div class="sale">
                    <p>23% Off All Products</p>
                    <router-link to="/shop" class="a">
                        <p>Shop Now</p>
                    </router-link>
                </div>
                <img src="/images/clock.png" alt="">
            </div>
            <div class="product">
                <div class="sale">
                    <p>23% Off All Products</p>
                    <router-link to="/shop" class="a">
                        <p>Shop Now</p>
                    </router-link>
                </div>
                <img src="/images/image-1161.png" alt="">
            </div>
            <div class="chairs">
                <div class="chair">
                    <img src="/images/image-30.png" alt="">
                    <div class="seatChair">
                        <p>Executive Seat chair</p>
                        <p class="ex-price">$320</p>
                    </div>
                </div>
                <div class="chair">
                    <img src="/images/image-19.png" alt="">
                    <div class="seatChair">
                        <p>Executive Seat chair</p>
                        <p class="ex-price">$320</p>
                    </div>
                </div>
                <div class="chair">
                    <img src="/images/image-28.png" alt="">
                    <div class="seatChair">
                        <p>Executive Seat chair</p>
                        <p class="ex-price">$320</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="discountItem">
        <h1 class="discount-head">Discount Item</h1>
        <div class="tabs">
            <n-tabs animated justify-content="center">
                <n-tab-pane name="wood-chair" tab="Wood chair">
                    <div class="discounts">
                        <div class="discounts-desc">
                            <h2>20% Discount Of All Product</h2>
                            <p class="eams">Eams Sofa Compact</p>
                            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
                                voluptatum
                                distinctio laborum,</p>
                            <div class="features">
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Materil Expose Like Metals</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Simple Naturle Colors</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Simple Naturle Colors</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Materil Expose Like Metals</p>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/shop">
                                <button>Shop Now</button>
                            </router-link>
                        </div>
                        <img src="/images/tortuga-01-b-1.png" alt="">
                    </div>
                </n-tab-pane>
                <n-tab-pane name="Plastic Chair" tab="Plastic Chair">
                    <div class="discounts">
                        <div class="discounts-desc">
                            <h2>20% Discount Of All Product</h2>
                            <p class="eams">Eams Sofa Compact</p>
                            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
                                voluptatum
                                distinctio laborum,</p>
                            <div class="features">
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Materil Expose Like Metals</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Simple Naturle Colors</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Simple Naturle Colors</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Materil Expose Like Metals</p>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/shop">
                                <button>Shop Now</button>
                            </router-link>
                        </div>
                        <img src="/images/Comfort-Hondy3.png" alt="">
                    </div>
                </n-tab-pane>
                <n-tab-pane name="Sofa Collection" tab="Sofa Collection">
                    <div class="discounts">
                        <div class="discounts-desc">
                            <h2>20% Discount Of All Product</h2>
                            <p class="eams">Eams Sofa Compact</p>
                            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
                                voluptatum
                                distinctio laborum,</p>
                            <div class="features">
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Materil Expose Like Metals</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Simple Naturle Colors</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Simple Naturle Colors</p>
                                    </div>
                                </div>
                                <div class="feature">
                                    <div class="check">

                                        <n-icon>
                                            <Check />
                                        </n-icon>
                                        <p>Materil Expose Like Metals</p>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/shop">
                                <button>Shop Now</button>
                            </router-link>
                        </div>
                        <img src="/images/chair1.png" alt="">
                    </div>
                </n-tab-pane>
            </n-tabs>
        </div>
    </div>
    <div class="topCategorie">
        <h1>Top Categories</h1>
        <Product :items="topCategoriesProducts" />
    </div>
    <Footer />
</template>
<script async setup>
import navs from '@/components/navs.vue'
import Product from '@/components/Product.vue';
import leatestProducts from '@/components/leatestProducts.vue';
import Footer from '@/components/footer.vue';
import { onMounted, ref } from 'vue';
import { Check } from '@vicons/tabler'
import { NIcon, NTabs, NTabPane } from "naive-ui"
import axios from 'axios'

const featuredProducts = ref([])
const getfeaturedProducts = await axios.get('/api/featuredProducts.json');
featuredProducts.value = getfeaturedProducts.data

const leatestProduct = ref([])
const getleatestProducts = await axios.get('/api/leatestProducts.json');
leatestProduct.value = getleatestProducts.data

const trendProducts = ref([])
const gettrendingProducts = await axios.get('/api/trendingProducts.json');
trendProducts.value = gettrendingProducts.data

const topCategoriesProducts = ref([])
const gettopCategoriesProducts = await axios.get('/api/topCategories.json');
topCategoriesProducts.value = gettopCategoriesProducts.data
</script>