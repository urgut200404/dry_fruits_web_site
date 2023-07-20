<template >
    <div class="m-auto w-100 tepa">
        <div class="container">
            <div class="container logo_uchun">
                <img src="../assets/title_images.png" style="width: 70px;" alt="">
                <b class="fs-1">Dry <span class="text-warning">Fruits</span></b>

            </div>

            <MDBNavbar expand="lg" light bg="light" container>
                <MDBNavbarBrand href="https:/dryfruit-urguts.com"> <b><span> Dry</span> <span
                            class="text-success">Fruits</span></b></MDBNavbarBrand>
                <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent" class="bg-dark">
                </MDBNavbarToggler>
                <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
                    <MDBNavbarNav class="mb-2 mb-lg-0">
                        <MDBNavbarItem to="/" active>
                            Home
                        </MDBNavbarItem>
                        <MDBNavbarItem to="/buy-now">
                            Buy Now
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <!-- Navbar dropdown -->
                            <MDBDropdown class="nav-item" v-model="dropdown1">
                                <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1">Contact Us
                                </MDBDropdownToggle>
                                <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                                    <MDBDropdownItem href="#">
                                        <MDBIcon icon="camera-retro" /> Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem to="/buy-now">
                            Fruits
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <!-- Search form -->
                    <form class="d-flex input -group w-auto me-lg-5" style="width: 50% !important;">
                        <input type="search" class="form-control" v-model="umumiy_izlash" placeholder="Type query"
                            aria-label="Search" />
                        <MDBBtn class="bg-dark text-light" @click="umumiy_izlash_funfsiyasi(true, umumiy_izlash)">
                            <MDBIcon icon="search" icon-style="fas" />
                        </MDBBtn>
                    </form>
                    <MDBBtn class=" ps-3 pe-3 log_sigin  bg-dark" @click="showModal2 = true">Log In</MDBBtn>
                    <MDBBtn class=" ps-3 pe-3  log_sigin bg-dark" @click="showModal3 = true">Sig In
                        <MDBIcon icon="log-out" iconStyle="fa" />
                    </MDBBtn>
                    <!-- Navbar dropdown -->
                    <MDBDropdown class="nav-item ms-3 d-none" v-model="dropdown2">
                        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown2 = !dropdown2">
                            <MDBIcon icon="user " />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                            <MDBDropdownItem href="#">
                                <MDBIcon icon="camera-retro" /> Action
                            </MDBDropdownItem>
                            <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBCollapse>
            </MDBNavbar>
        </div>

        <n-modal v-model:show="showModal" transform-origin="center" class="p-0 bg-warning">
            <n-card style="width: 950px" title="Search By Name Dried Fruits" :bordered="false" size="huge" role="dialog"
                aria-modal="true" class="p-0">
                <template #header-extra>
                    <span class="text-light" @click="showModal = false" style="cursor: pointer;"><b
                            class="text-danger orqaga_icon h5" title="Назад">
                            <MDBIcon icon="minus" icon-style="fa" />
                        </b></span>
                    <span class="text-light" @click="showModal = false" style="cursor: pointer;"><b
                            class="text-danger orqaga_icon h5" title="Назад">
                            <MDBIcon icon="" icon-style="fab" />
                        </b></span>
                </template>

                {{ Modal_uchun_card }}
                <n-card :title="i.name" hoverable v-for="i in card_listlar_uchun[0]" id="pastki_cart">
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
            </n-card>
        </n-modal>

        <!-- Login pages -->
        <n-modal v-model:show="showModal2" transform-origin="center" class="p-0 ">
            <n-card style="width: 950px" title="Log In" :bordered="false" size="huge" role="dialog" aria-modal="true"
                class="p-0">
                <template #header-extra>
                    <span class="text-light" @click="showModal2 = false" style="cursor: pointer;"><b
                            class="text-danger orqaga_icon h5" title="Назад">
                            <MDBIcon icon="minus" icon-style="fa" />
                        </b></span>
                </template>
                <form action="" class="form-control" id="login_form_pages">
                    <!-- Error div  -->
                    <div class="text-center text-danger error_login_parol" :style="login_parol_xatosida">
                        <b>Login Yoki Parolda xato bor
                            <MDBIcon icon="warning" icon-style="fa" /> <br> qayta urinib koring !!
                        </b>
                    </div>
                    <p>
                        <label for="login" class="text-dark">Login</label>
                        <input type="text" id="login" class="form-control" v-model="login777" required
                            placeholder="Login And Email Address">
                    </p>
                    <p>
                        <label for="parol" class="text-dark">Password</label>
                        <input type="password" id="parol" class="form-control" v-model="parol777" required
                            placeholder="Password">
                    </p>
                    <MDBBtn class="bg-dark w-100 text-light" type="submit">Submit</MDBBtn>

                    <p class="d-flex justify-content-between"> <span class="d-flex gap-1 mt-2"><input type="checkbox"
                                class="form-check" required> Meni eslab qol .</span>
                        <span class="text-decoration-underline text-primary"><a href="http://t.me/urgut_mx">Help
                                me</a></span>
                    </p>
                </form>
            </n-card>
        </n-modal>

        <!-- Sig In pages  -->
        <n-modal v-model:show="showModal3" transform-origin="center" class="p-0 ">
            <n-card style="width: 950px" title="Sig In" :bordered="false" size="huge" role="dialog" aria-modal="true"
                class="p-0">
                <template #header-extra>
                    <span class="text-light" @click="showModal3 = false" style="cursor: pointer;"><b
                            class="text-danger orqaga_icon h5" title="Назад">
                            <MDBIcon icon="minus" icon-style="fa" />
                        </b></span>
                </template>
                <form action="" class="form-control" id="sigin_form_pages">
                    <div class="d-flex gap-2">
                        <p class="w-50"><label for="first_name">First Name</label>
                            <input type="text" class="form-control" required placeholder="First Name">
                        </p>
                        <p class="w-50">
                            <label for="last_name">Last Name</label>
                            <input type="text" class="form-control" required placeholder="Last Name">
                        </p>
                    </div>
                    <div class="d-flex gap-2">
                        <p class="w-50"><label for="first_name">Email Address</label>
                            <input type="text" class="form-control" required placeholder="Email Address">
                        </p>
                        <p class="w-50">
                            <label for="last_name">Password</label>
                            <input type="text" class="form-control" required placeholder="Passsword">
                        </p>
                    </div>
                    <MDBBtn class="bg-dark w-100 text-light mt-2" >Submit</MDBBtn>
                </form>
            </n-card>
        </n-modal>
    </div>
</template>

<script setup>
import {
    MDBIcon,
    MDBBtn,
    MDBInput,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-vue-ui-kit';

import { ref } from 'vue';
import { onMounted, computed } from 'vue';
let login777 = ref(''), parol777 = ref('');
let umumiy_izlash = ref('');
let showModal = ref(false);
let showModal2 = ref(false);
let showModal3 = ref(false);
const collapse1 = ref(false);
const dropdown1 = ref(false);
const dropdown2 = ref(false);
let Modal_uchun_card = ref();
let login_parol_xatosida = ref("visibility:hidden;")


let card_listlar_uchun = ref([
    [{ "id": 0, "rasim": new URL('../assets/Goji Berries.jpg', import.meta.url), "name": "Goji Berries" }],
    [{ "id": 1, "rasim": new URL('../assets/jackfruit,.jpg', import.meta.url), "name": "Jackfruit" }],
    [{ "id": 2, "rasim": new URL('../assets/Turkish Apricots.jpg', import.meta.url), "name": "Turkish Apricots" }],
    [{ "id": 3, "rasim": new URL('../assets/Dried Apple Rings.jpg', import.meta.url), "name": "Dried Apple Rings" }],
    [{ "id": 4, "rasim": new URL('../assets/Dried Peaches.jpg', import.meta.url), "name": "Dried Peaches" }],
    [{ "id": 5, "rasim": new URL('../assets/Banana Chips.jpg', import.meta.url), "name": "Banana Chips" }],
    [{ "id": 6, "rasim": new URL('../assets/Dried Blueberries.jpg', import.meta.url), "name": "Dried Blueberries" }],
    [{ "id": 7, "rasim": new URL('../assets/Dried Papaya Chunks.jpg', import.meta.url), "name": "Dried Papaya Chunks" }],
    [{ "id": 8, "rasim": new URL('../assets/Dried Cranberries.jpg', import.meta.url), "name": "Dried Cranberries" }],
    [{ "id": 9, "rasim": new URL('../assets/Sun Dried Tomatoes.jpg', import.meta.url), "name": "Sun Dried Tomatoes" }],
    [{ "id": 10, "rasim": new URL('../assets/Dried Cantaloupe.jpg', import.meta.url), "name": "Dried Cantaloupe" }],
    [{ "id": 11, "rasim": new URL('../assets/Dried Strawberries – Thailand.jpg', import.meta.url), "name": "Dried Strawberries – Thailand" }],
    [{ "id": 12, "rasim": new URL('../assets/Dried Plums  Pitted Prunes.jpg', import.meta.url), "name": "Dried Plums  Pitted Prunes" }],
    [{ "id": 13, "rasim": new URL('../assets/Dried Tart Cherries.jpg', import.meta.url), "name": "Dried Tart Cherries" }],
    [{ "id": 14, "rasim": new URL('../assets/Dried-Star-Fruit.jpg', import.meta.url), "name": "Dried-Star-Fruit" }],
    [{ "id": 15, "rasim": new URL('../assets/kivi.jpg', import.meta.url), "name": "Dried Kiwi fruit" }],
    [{ "id": 16, "rasim": new URL('../assets/Low Sugar Crystallized Ginger, No Sulfur.jpg', import.meta.url), "name": "Low Sugar" }],
    [{ "id": 17, "rasim": new URL('../assets/Dried Pineapple Rings.jpg', import.meta.url), "name": "Dried Pineapple Rings" }],
    [{ "id": 18, "rasim": new URL('../assets/Coconut Slices.jpg', import.meta.url), "name": "Coconut Slices" }],
    [{ "id": 19, "rasim": new URL('../assets/Mission Figs.jpg', import.meta.url), "name": "Mission Figs" }],
    [{ "id": 20, "rasim": new URL('../assets/Dried Mango.jpg', import.meta.url), "name": "Dried Mango" }],
    [{ "id": 21, "rasim": new URL('../assets/Unsulfured Apricots.jpg', import.meta.url), "name": "Unsulfured Apricots" }],
    [{ "id": 22, "rasim": new URL('../assets/Crystallized Ginger Slices.jpg', import.meta.url), "name": "Crystallized Ginger Slices" }],
    [{ "id": 23, "rasim": new URL('../assets/Dried Nectarines.jpg', import.meta.url), "name": "Dried Nectarines" }],
    [{ "id": 24, "rasim": new URL('../assets/Plantain Chips Salted.jpg', import.meta.url), "name": "Plantain Chips Salted" }],
    [{ "id": 25, "rasim": new URL('../assets/Organic Dried Banana Whole – Vietnam.jpg', import.meta.url), "name": "Organic Dried Banana Whole" }],
    [{ "id": 26, "rasim": new URL('../assets/Goji Berries.jpg', import.meta.url), "name": "Goji Berries" }],
    [{ "id": 27, "rasim": new URL('../assets/Unsweetened Banana Chips.jpg', import.meta.url), "name": "Unsweetened Banana Chips" }],
]);

let umumiy_izlash_funfsiyasi = onMounted(async (modal_uchun, card_uchun) => {
    showModal.value = modal_uchun
})




</script>
<style scoped>  .logo_uchun {
      transition: ease 0.6s;
      display: flex;
      justify-content: start;
      align-items: center;
      /* visibility: visible; */
  }


  #login_form_pages,
  #sigin_form_pages {
      background: none;
      border: none;
  }

  .carousel-img {
      width: 100%;
      height: 650px;
      object-fit: cover;
      filter: brightness(50%);
  }

  #pastki_cart {
      max-width: 300px;
      transition: ease 0.2s !important;
      box-shadow: 0 0 10px #c3c2c2 !important;
      border-radius: 5px;
  }

  .n-card:hover img {
      transform: scale(1) !important;
      z-index: 23
  }

  .yulduzcha {
      width: 20px;
      color: orange;
  }

  .log_sigin {
      font-size: 15px;
      text-transform: capitalize;
      color: #e2e1e1 !important;
      display: flex;
      align-items: center !important;
      font-weight: 750;
      height: 35px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


  .rtlink {
      box-shadow: none !important;
  }

  .tepa {
      /* position: sticky !important; */
      top: 0 !important;
      z-index: 1000;
      background: url('../assets/slideshow_2.jpg') no-repeat;
      background-size: cover;
      object-fit: cover;
      /* filter: brightness(80%); */

  }

  .navbar-toggler {
      color: #fff !important;
      box-shadow: 0 0 10px #fff !important;
  }

  nav {
      position: sticky !important;
      top: 0 !important;
      z-index: 22;
      backdrop-filter: blur(10px);
      background: none !important;
      /* border-radius: 10px; */
      box-shadow: none;
      /* border: solid 2px #885b1f; */
      width: 106%;
  }

  nav a {
      position: relative;
      text-transform: capitalize;
  }

  .router-link {
      text-transform: uppercase;
  }

  /* nav a:hover{ 
    margin: 0 auto;
    width: 100%;
    bottom: 0;
    border-bottom: solid orange;
} */
  /* .container-fluid a{
    color:#fff !important;
 } */
</style>