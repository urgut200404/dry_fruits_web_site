<template >
  <div>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in" name="fade">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback>
                <div>Salom</div>
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>

    
  </div>
</template>
<script setup>
import { ref , onMounted} from 'vue';
let search_inpt = ref(false);
let logo_uchun_still = ref(true);
//  let umumiy_fung = onMounted(async () => {
//     window.onscroll = function () { NavbarUchun() }
//     function NavbarUchun() {
//         let navbar = document.querySelector(".tepa");
//         let logo_uchun = document.querySelector(".logo_uchun");
//         if (document.body.scrollTop > 24.9999999 || document.documentElement.scrollTop > 19.999999999) {
//             logo_uchun_still.value = false;
//             navbar.classList.add("add70");
//             search_inpt.value = true;
//         } else {
//             logo_uchun_still.value = true;
//             navbar.classList.remove("add70");
//             search_inpt.value = false;

//         }
//     }
// })
</script>
<style >

.router-link-exact-active {  
  border-bottom: solid 2px  rgb(218, 142, 0) !important;
  border-radius: 0;
  color: rgb(96, 74, 33) !important;
  font-weight: 700 !important;
  /* box-shadow: 0px 10px 10px #3b3b3b !important; */
}

.add70 {
     /* background: orange !important;  */
     display: flex !important;
     /* transform: scale(0.9); */
     transition: ease-in 0.1s;
     flex-wrap: wrap;
     border-bottom: solid;
 }


::-webkit-scrollbar {
  width: 7px; 
} 
::-webkit-scrollbar-track {
  background: #d7d7d7;
  /* background: linear-gradient(to bottom, orange,#b7b7b7, orange); */
  border-radius: 150px;
}

::-webkit-scrollbar-thumb {
  /* background: linear-gradient(to bottom, rgb(255, 255, 255),#fff, rgb(255, 255, 255)); */
  background: rgb(86, 82, 82);
  border-radius: 150px;
  /* border: solid #fff 1px; */
}
.n-card img{transition:  ease 0.4s;}
.n-card:hover img{
    transform: scale(1.2) !important;
}


::-ms-scrollbar {
  width: 5px; 
  background: red !important;
}

::-ms-scrollbar-track {
  background: red !important; 
  
}

::-ms-scrollbar-thumb {
  background:red !important; 
}
 


.fade-enter-active {
  transition:all 0.2s linear;
  transform: scale(1);
  filter: blur(0px);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(3px);
}





.n-carousel .n-carousel__arrow-group{ 
    width: 97.6% !important;
    justify-content: space-between;
    font-size: 20px;
    transform: translateY(-100px);
}
.n-carousel__arrow{
    width: 40px !important;
    height: 40px !important; 
    backdrop-filter: blur(100px) !important ;
    /* outline: solid; */
}
.n-carousel__dots{
    /* transform: translateX(50%) !important; */
}
</style>