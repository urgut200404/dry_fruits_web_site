<template >
    <div>
        <NAV></NAV>
        <div class="asosiy">
            <!-- <MDBCarousel v-model="carousel8" :items="items8" fade dark id="nav_carusel"/> -->
            <!-- <MDBCarousel v-model="carousel8" :items="items8" :touch="false" /> -->
            <!-- <n-carousel :space-between="20" draggable autoplay>
            <img class="carousel-img" src="../assets/m3.jpg"> 
            <img class="carousel-img" src="../assets/m2.jpeg"> 
        </n-carousel> -->

            <!-- <MDBCarousel v-model="carousel5" :items="items5" /> -->
        </div>
        <div class="container  mt-5 pt-5 ps-0 pe-0">
            <!-- <MDBRow :cols="['5', 'md-5']" class="g-4">
                <MDBCol v-for="i in [1,2,3,5,5,5,5,5]" >
                    <MDBCard class="h-100">
                        <MDBCardImg src="../assets/Turkish Apricots.jpg" class=""/>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider ca This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                 
            </MDBRow> -->
            <div class="card-group p-0 gap-2 justify-content-between   mb-5" style="">
                <n-card :title="i.name" hoverable v-for="i in card_listlar_uchun">
                    <template #cover>
                        <img :src="i.rasim">
                    </template>
                    <div>
                        <router-link :to="{ name: 'by-now-fruit', params: { id: i.id } }"
                            class="btn btn-outline-success me-2">Buy
                            Now</router-link>
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
        <div class="" style="border-bottom: solid rgb(38, 67, 71) 7px; ">
            <div class="container pt-5 p-0 pb-5">
                <n-carousel slides-per-view="auto" :space-between="10" :loop="true" draggable autoplay show-arrow>
                    <n-carousel-item style="width: 40%" v-for="caruselmx7 in card_listlar_uchun" :key="caruselmx7.id">
                        <img class="carousel-img" :src="caruselmx7.rasim">
                    </n-carousel-item>

                </n-carousel>
            </div>
        </div>
        <div class="m-auto text-center" style="overflow-x: hidden;">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1484.707117391979!2d67.24214305526282!3d39.42931499778718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI1JzQ1LjUiTiA2N8KwMTQnMzQuMyJF!5e1!3m2!1sru!2s!4v1689621533651!5m2!1sru!2s"
                width="1600" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Footer></Footer>


    </div>
</template>
<script setup>
import NAV from "../components/navbar.vue";
import Footer from '../components/footer.vue'
import { ref } from "vue";
import { MDBIcon } from 'mdb-vue-ui-kit';
import { MDBFooter, MDBContainer } from "mdb-vue-ui-kit";
import { MDBCarousel } from "mdb-vue-ui-kit";
import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardFooter } from "mdb-vue-ui-kit";
import { defineComponent } from 'vue'
import { CashOutline } from '@vicons/ionicons5'

const basicActive = ref(0);

const items5 = [
    {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
        alt: "...",
        label: "First slide label",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
        alt: "...",
        label: "Second slide label",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
        alt: "...",
        label: "Third slide label",
        caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
];
const carousel5 = ref(0);

const items8 = [
    {
        src: new URL('../assets/m1.jgp', import.meta.url),
        alt: "...",
        label: "1- rasim uchun",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        src: new URL('../assets/m2.jgp', import.meta.url),
        alt: "...",
        label: "2- rasim uchun",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        src: new URL('../assets/m3.jgp', import.meta.url),
        alt: "...",
        label: "3- rasim uchun",
        caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
]
const carousel8 = ref(0);
let card_listlar_uchun = ref([
    { "id": 0, "rasim": new URL('../assets/Goji Berries.jpg', import.meta.url), "name": "Goji Berries" },
    { "id": 1, "rasim": new URL('../assets/jackfruit,.jpg', import.meta.url), "name": "Jackfruit" },
    { "id": 2, "rasim": new URL('../assets/Turkish Apricots.jpg', import.meta.url), "name": "Turkish Apricots" },
    { "id": 3, "rasim": new URL('../assets/Dried Apple Rings.jpg', import.meta.url), "name": "Dried Apple Rings" },
    { "id": 4, "rasim": new URL('../assets/Dried Peaches.jpg', import.meta.url), "name": "Dried Peaches" },
    { "id": 5, "rasim": new URL('../assets/Banana Chips.jpg', import.meta.url), "name": "Banana Chips" },
    { "id": 6, "rasim": new URL('../assets/Dried Blueberries.jpg', import.meta.url), "name": "Dried Blueberries" },
    { "id": 7, "rasim": new URL('../assets/Dried Papaya Chunks.jpg', import.meta.url), "name": "Dried Papaya Chunks" },
    { "id": 8, "rasim": new URL('../assets/Dried Cranberries.jpg', import.meta.url), "name": "Dried Cranberries" },
    { "id": 9, "rasim": new URL('../assets/Sun Dried Tomatoes.jpg', import.meta.url), "name": "Sun Dried Tomatoes" },
    { "id": 10, "rasim": new URL('../assets/Dried Cantaloupe.jpg', import.meta.url), "name": "Dried Cantaloupe" },
    { "id": 11, "rasim": new URL('../assets/Dried Strawberries – Thailand.jpg', import.meta.url), "name": "Dried Strawberries – Thailand" },
    { "id": 12, "rasim": new URL('../assets/Dried Plums  Pitted Prunes.jpg', import.meta.url), "name": "Dried Plums  Pitted Prunes" },
    { "id": 13, "rasim": new URL('../assets/Dried Tart Cherries.jpg', import.meta.url), "name": "Dried Tart Cherries" },
    { "id": 14, "rasim": new URL('../assets/Dried-Star-Fruit.jpg', import.meta.url), "name": "Dried-Star-Fruit" },
    { "id": 15, "rasim": new URL('../assets/kivi.jpg', import.meta.url), "name": "Dried Kiwi fruit" },
    { "id": 16, "rasim": new URL('../assets/Low Sugar Crystallized Ginger, No Sulfur.jpg', import.meta.url), "name": "Low Sugar" },
    { "id": 17, "rasim": new URL('../assets/Dried Pineapple Rings.jpg', import.meta.url), "name": "Dried Pineapple Rings" },
    { "id": 18, "rasim": new URL('../assets/Coconut Slices.jpg', import.meta.url), "name": "Coconut Slices" },
    { "id": 19, "rasim": new URL('../assets/Mission Figs.jpg', import.meta.url), "name": "Mission Figs" },
    { "id": 20, "rasim": new URL('../assets/Dried Mango.jpg', import.meta.url), "name": "Dried Mango" },
    { "id": 21, "rasim": new URL('../assets/Unsulfured Apricots.jpg', import.meta.url), "name": "Unsulfured Apricots" },
    { "id": 22, "rasim": new URL('../assets/Crystallized Ginger Slices.jpg', import.meta.url), "name": "Crystallized Ginger Slices" },
    { "id": 23, "rasim": new URL('../assets/Dried Nectarines.jpg', import.meta.url), "name": "Dried Nectarines" },
    { "id": 24, "rasim": new URL('../assets/Plantain Chips Salted.jpg', import.meta.url), "name": "Plantain Chips Salted" },
    { "id": 25, "rasim": new URL('../assets/Organic Dried Banana Whole – Vietnam.jpg', import.meta.url), "name": "Organic Dried Banana Whole" },
    { "id": 26, "rasim": new URL('../assets/Goji Berries.jpg', import.meta.url), "name": "Goji Berries" },
    { "id": 27, "rasim": new URL('../assets/Unsweetened Banana Chips.jpg', import.meta.url), "name": "Unsweetened Banana Chips" },
]);



</script>
<style  scoped >
.carousel-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    filter: brightness(70%);
    border-radius: 10px;
    cursor: grab;
}

.yulduzcha {
    width: 27px;
    color: orange;
}

.asosiy {
    background: url('../assets/m3.jpg') no-repeat;
    height: 732px;
    object-fit: cover;
    background-size: cover;
    /* filter: brightness(80%); */
    /* position: sticky;
    top: 10px;
    z-index: -11; */
    /* background-attachment: fixed; */
}


.n-card {
    max-width: 300px;
    transition: ease 0.2s !important;
 }




.n-card:hover {
    filter: brightness(85%); 
}

.carousel-control-next,
.carousel-control-prev {
    /* background-color: aliceblue; */
    /* width: 100px; */
    /* height: 100px; */
}

/* #nav_carusel .carousel-item img {
    height: 650px !important;
    object-fit: cover;
    filter: brightness(40%);
} */
.carousel-caption {
    /* background-color: aqua !important; */
    margin-bottom: 100px;
}
</style>