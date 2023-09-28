import {createRouter,createWebHistory} from "vue-router";
import RestaurantOptions from "@/components/restaurant-options.vue";
import Home from "@/components/Home.vue";
import Pages from "@/components/Pages.vue";
import OrdersHistory from "@/components/Orders-History.vue";
import Profile from "@/components/Profile.vue";
import Offers from "@/components/Offers.vue";

const routes=[
    {path:"/start",component: Home},
    {path:"/restaurants",component: RestaurantOptions},
    {path: "/orders-history",component: OrdersHistory},
    {path:"/offers",component: Offers},
    {path:"/pages",component: Pages},
    {path:"/profile",component: Profile},
]

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;