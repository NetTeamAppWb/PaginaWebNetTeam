import {createRouter,createWebHistory} from "vue-router";
import RestaurantOptions from "@/components/restaurant-options.vue";

const routes=[
    {path:"/"},
    {path:"/restaurants",component: RestaurantOptions}
]

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;