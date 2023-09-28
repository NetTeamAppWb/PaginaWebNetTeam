import {createRouter,createWebHistory} from "vue-router";
import RestaurantOptions from "@/components/restaurant-options.vue";
import profileComponent from "./components/profile.component.vue";

const routes=[
    {path:"/"},
    {path:"/profile",component: profileComponent},
    {path:"/restaurants",component: RestaurantOptions}
]

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;