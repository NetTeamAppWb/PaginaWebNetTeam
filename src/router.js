import {createRouter,createWebHistory} from "vue-router";
import RestaurantOptions from "@/components/restaurant-options-component.vue";
import Home from "@/components/home-component.vue";
import Pages from "@/components/pages-component.vue";
import OrdersHistory from "@/components/orders-history-component.vue";
import Profile from "@/components/profile-component.vue";
import Offers from "@/components/offers-component.vue";
import LoginComponent from "@/components/login-component.vue";
import PageNotFoundComponent from "@/components/page-not-found-component.vue";
import RegisterComponent from "@/components/register-component.vue";
import ExitComponent from "@/components/exit-component.vue";

const routes=[
    {path:"/login",component: LoginComponent},
    {path:"/register",component: RegisterComponent},
    {path:"/home",name:'Home',component: Home},
    {path:"/restaurants",component: RestaurantOptions},
    {path:"/orders-history",component: OrdersHistory},
    {path:"/offers",component: Offers},
    {path:"/pages",component: Pages},
    {path:"/profile",component: Profile},
    {path:"/exit",component: ExitComponent},
    {path:"/:pathMatch(.*)*", component: PageNotFoundComponent},
    { path: "/", redirect: "/login" },
]

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;