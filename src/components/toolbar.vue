<script>
import { useRouter } from 'vue-router';
export default {
  name: 'Toolbar-restaurants',
  setup() {
    const router = useRouter();

    const StartSreen =()=>{
      router.push('/start');
    };
    const RestaurantScreen = () => {
      router.push('/restaurants');
    };

    const OrdersSreen =()=>{
      router.push('/orders-history');
    };

    const OffersSreen =()=>{
      router.push('/offers')
    };
    const PagesSreen = () => {
      router.push('/pages');
    };

    const ProfileSreen = ()=>{
      router.push('/profile');
    };

    return {
      StartSreen,
      RestaurantScreen,
      OrdersSreen,
      OffersSreen,
      PagesSreen,
      ProfileSreen,
    };
  },
};
</script>

<template>
  <div class="toolbar">
    <div class="left">
      <!-- Logo de EmprendeChef -->
      <img src="@/assets/logoNetTeam.png" alt="logoEmprendeChef" class="logo-image">
      <span class="logo">{{$t("namelog")}}</span>
    </div>
    <div class="right">
      <!-- Botones de navegación -->
      <button class="button" @click="StartSreen">{{$t("start")}}</button>
      <button class="button" @click="RestaurantScreen">{{$t("restaurant")}}</button>
      <button class="button" @click="OrdersSreen">{{$t("orders")}}</button>
      <button class="button" @click="OffersSreen">{{$t("offers")}}</button>
      <button class="button" @click="PagesSreen">{{$t("membership")}}</button>
      <button class="button" @click="ProfileSreen">{{$t("profile")}}</button>
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F1F1F1;
  color: orange;
  padding: 19px 40px;
  flex-wrap: wrap;
}

.left {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-right: 50px;
}

.button {
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 16px;
  margin-right: 59px;
  cursor: pointer;
}

.right {
  display: flex;
  align-items: center;
}


.logo-image {
  width: 110px;
  margin-right: 15px;
}


</style>

