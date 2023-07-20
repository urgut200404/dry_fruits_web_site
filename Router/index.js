import {createRouter, createWebHistory} from 'vue-router';
const router = createRouter({
    history:createWebHistory(), 
    routes:[
        {
            path:"/",
            name:"home",
            component: ()=> import("../src/components/home.vue")
        },
        {
            path:"/nav",
            name:"nav", 
            component: ()=> import("../src/components/navbar.vue")
        },
        {
            path:"/buy-now",
            name:"by-now", 
            component:()=> import("../src/components/xarid.vue")
        }, 
        {
            path:"/buy-now/fruit/:id", 
            name:"by-now-fruit", 
            props:true,
            component:()=> import("../src/components/childs/buyfruit.vue")
        }, 
        {
            path:"/buy-now/fruit/teams/:id", 
            name:"by-now-fruit-team", 
            props:true, 
            component :()=> import("../src/components/childs/buyfruitsteams.vue")
        }
    ]
})

export default router;