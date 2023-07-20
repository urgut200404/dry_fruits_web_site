<template>
    <div>
        <div class="container mt-5 mb-5">
            <router-link :to="{ name: 'by-now' }" class="btn bg-dark text-light d-flex align-items-center gap-1 fs-6"
                style="width: 12%;"><i class="fas fa-chevron-circle-left fs-4"></i>
                Back</router-link>
            <!-- <n-carousel :space-between="20" draggable autoplay>
                <img class="carousel-img" src="../../assets/Dried Peaches.jpg">
                <img class="carousel-img" src="../../assets/Dried Cantaloupe.jpg">
            </n-carousel> -->

            <!-- <div class="container w-75">
                <MDBCarousel v-model="carousel8" :items="items8" :touch="false" />
            </div> -->
            <div class="mt-5">
                <n-card :title="i.name" hoverable v-for="i in card_listlar_uchun[$route.params.id]">
                    <template #cover>
                        <img :src="i.rasim">
                    </template>
                    <div>
                        <router-link :to="{ name: 'by-now-fruit', params: { id: i.id } }"
                            class="btn btn-outline-dark me-2">Buy Now
                            <MDBIcon icon="message" iconStyle="fa"></MDBIcon>
                        </router-link>
                        <svg xmlns="http://www.w3.org/2000/svg" v-for="a in [1, 2, 3]" class="yulduzcha"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                            <path
                                d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"
                                fill="currentColor"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" v-for="x in [1, 2]" class="yulduzcha"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                            <path d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160z" fill="none"
                                stroke="currentColor" stroke-linejoin="round" stroke-width="20"></path>
                        </svg>
                    </div>
                    
                </n-card>
            </div>
          
        </div>

        <Footer></Footer>
    </div>
</template>
<script setup>
import Nav from "../navbar.vue";
import Footer from '../footer.vue'
import { ref } from "vue";
import { MDBIcon } from 'mdb-vue-ui-kit';
import { MDBCarousel } from "mdb-vue-ui-kit";
import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardFooter } from "mdb-vue-ui-kit";
import { defineComponent } from 'vue'
import { CashOutline } from '@vicons/ionicons5'



const items8 = [
    {
        src: new URL('../../assets/m2.jpeg', import.meta.url),
        alt: "...",
        label: "1- rasim uchun",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        src: new URL('../../assets/m1.jpg', import.meta.url),
        alt: "...",
        label: "2- rasim uchun",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        src: new URL('../../assets/m4.jpg', import.meta.url),
        alt: "...",
        label: "3- rasim uchun",
        caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
]
let card_listlar_uchun = ref([
    [{ "id": 0, "rasim": new URL('../../assets/Goji Berries.jpg', import.meta.url), "name": "Goji Berries" }],
    [{ "id": 1, "rasim": new URL('../../assets/jackfruit,.jpg', import.meta.url), "name": "Jackfruit" }],
    [{ "id": 2, "rasim": new URL('../../assets/Turkish Apricots.jpg', import.meta.url), "name": "Turkish Apricots" }],
    [{ "id": 3, "rasim": new URL('../../assets/Dried Apple Rings.jpg', import.meta.url), "name": "Dried Apple Rings" }],
    [{ "id": 4, "rasim": new URL('../../assets/Dried Peaches.jpg', import.meta.url), "name": "Dried Peaches" }],
    [{ "id": 5, "rasim": new URL('../../assets/Banana Chips.jpg', import.meta.url), "name": "Banana Chips" }],
    [{ "id": 6, "rasim": new URL('../../assets/Dried Blueberries.jpg', import.meta.url), "name": "Dried Blueberries" }],
    [{ "id": 7, "rasim": new URL('../../assets/Dried Papaya Chunks.jpg', import.meta.url), "name": "Dried Papaya Chunks" }],
    [{ "id": 8, "rasim": new URL('../../assets/Dried Cranberries.jpg', import.meta.url), "name": "Dried Cranberries" }],
    [{ "id": 9, "rasim": new URL('../../assets/Sun Dried Tomatoes.jpg', import.meta.url), "name": "Sun Dried Tomatoes" }],
    [{ "id": 10, "rasim": new URL('../../assets/Dried Cantaloupe.jpg', import.meta.url), "name": "Dried Cantaloupe" }],
    [{ "id": 11, "rasim": new URL('../../assets/Dried Strawberries – Thailand.jpg', import.meta.url), "name": "Dried Strawberries – Thailand" }],
    [{ "id": 12, "rasim": new URL('../../assets/Dried Plums  Pitted Prunes.jpg', import.meta.url), "name": "Dried Plums  Pitted Prunes" }],
    [{ "id": 13, "rasim": new URL('../../assets/Dried Tart Cherries.jpg', import.meta.url), "name": "Dried Tart Cherries" }],
    [{ "id": 14, "rasim": new URL('../../assets/Dried-Star-Fruit.jpg', import.meta.url), "name": "Dried-Star-Fruit" }],
    [{ "id": 15, "rasim": new URL('../../assets/kivi.jpg', import.meta.url), "name": "Dried Kiwi fruit" }],
    [{ "id": 16, "rasim": new URL('../../assets/Low Sugar Crystallized Ginger, No Sulfur.jpg', import.meta.url), "name": "Low Sugar" }],
    [{ "id": 17, "rasim": new URL('../../assets/Dried Pineapple Rings.jpg', import.meta.url), "name": "Dried Pineapple Rings" }],
    [{ "id": 18, "rasim": new URL('../../assets/Coconut Slices.jpg', import.meta.url), "name": "Coconut Slices" }],
    [{ "id": 19, "rasim": new URL('../../assets/Mission Figs.jpg', import.meta.url), "name": "Mission Figs" }],
    [{ "id": 20, "rasim": new URL('../../assets/Dried Mango.jpg', import.meta.url), "name": "Dried Mango" }],
    [{ "id": 21, "rasim": new URL('../../assets/Unsulfured Apricots.jpg', import.meta.url), "name": "Unsulfured Apricots" }],
    [{ "id": 22, "rasim": new URL('../../assets/Crystallized Ginger Slices.jpg', import.meta.url), "name": "Crystallized Ginger Slices" }],
    [{ "id": 23, "rasim": new URL('../../assets/Dried Nectarines.jpg', import.meta.url), "name": "Dried Nectarines" }],
    [{ "id": 24, "rasim": new URL('../../assets/Plantain Chips Salted.jpg', import.meta.url), "name": "Plantain Chips Salted" }],
    [{ "id": 25, "rasim": new URL('../../assets/Organic Dried Banana Whole – Vietnam.jpg', import.meta.url), "name": "Organic Dried Banana Whole" }],
    [{ "id": 26, "rasim": new URL('../../assets/Goji Berries.jpg', import.meta.url), "name": "Goji Berries" }],
    [{ "id": 27, "rasim": new URL('../../assets/Unsweetened Banana Chips.jpg', import.meta.url), "name": "Unsweetened Banana Chips" }],
]);
</script>
<style scoped>
.carousel-img {
    width: 100%;
    height: 650px;
    object-fit: cover;
    filter: brightness(50%);
}
 
.n-card {
    max-width: 400px;
    transition: ease 0.2s !important;
    box-shadow: 0 0 10px #c3c2c2 !important;
    border-radius: 5px;
} 
.n-card:hover img{
    transform: scale(1) !important;
}

.carousel-control-next .carousel-control-next-icon {
    outline: solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.yulduzcha {
    width: 27px;
    color: orange;
}
</style>