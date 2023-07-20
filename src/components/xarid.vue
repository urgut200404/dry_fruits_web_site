<template >
    <div>
        <Nav></Nav>
        <div class="container mt-1">
            <div class="position-stick7878  mb-5">
                <input type="search" class="form-control" placeholder="By Name Search" aria-label="Search"
                    v-model="fruit_name" />
            </div>
            <div class="card-group p-0 gap-2 justify-content-between   mb-5">
                <n-card :title="i.name" hoverable v-for="i in fruit_name_fung">
                    <template #cover>
                        <img :src="i.rasim">
                    </template>
                    <div>
                        <router-link :to="{ name: 'by-now-fruit-team', params: { id: i.id } }"
                            class="btn btn-outline-success me-2">Buy
                            Now 
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
import Nav from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import { ref, computed } from 'vue';
let fruit_name = ref('');
let fruit_name_error = ref(true);
import { MDBIcon } from 'mdb-vue-ui-kit';
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

let fruit_name_fung = computed(() => {
    return card_listlar_uchun.value.filter((meva) => {
        return meva.name.toLocaleLowerCase().includes(fruit_name.value.toLocaleLowerCase())
    })

})

</script>

<style scoped>
.n-card {
    max-width: 300px;
    transition: ease 0.2s !important;
}

.n-card:hover {
    filter: brightness(85%);
}

.yulduzcha {
    width: 27px;
    color: orange;
}

.position-stick7878 {
    position: sticky !important;

}

[type="search"] {
    height: 45px;
    transition: all 0.3s ease 2ms;
    border-bottom: solid rgb(56, 55, 54);
    /* background: #ffe7de; */
    /* color: #fff; */
}


[type="search"]:focus {
    transform: translateY(-2.2px);
    box-shadow: 10px 15px 8px #b8b8b8 !important;
    /* outline: solid rgb(144, 144, 232) 2px; */
}
</style>