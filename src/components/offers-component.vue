<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";

export default {
  name:"offers",
  components: {ToolbarRestaurants},
  data() {
    return {
      showOverlay: false,
    };
  },
  methods: {
    redirectToMembershipPage() {
      this.$router.push('/pages');
    },
    closePopup() {
      this.showOverlay = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.showOverlay = true;
    }, 500);
  },
};
</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>
  <div class="content">
    <Card class="photos">
      <template #title>{{$t("title_offers")}}</template>
      <template #content>
        <div class="image-container">
          <img src="@/assets/offers1.jpg" alt="photo1" class="image1" />
          <img src="@/assets/offers2.jpg" alt="photo2" class="image2" />
          <img src="@/assets/offers3.png" alt="photo2" class="image2" />
          <img src="@/assets/offers4.jpg" alt="photo2" class="image2" />
          <img src="@/assets/offers5.jpg" alt="photo2" class="image1" />
          <img src="@/assets/offers6.jpg" alt="photo2" class="image2" />
          <img src="@/assets/offers7.jpg" alt="photo2" class="image2" />
        </div>
      </template>
    </Card>
  </div>
  <div class="overlay" v-if="showOverlay"></div>
  <div class="membership-popup" v-if="showOverlay">
    <h2>{{$t("offers1")}}</h2>
    <p>{{$t("offers2")}}</p>
    <div class="button-container">
      <button class="join-button" @click="redirectToMembershipPage">{{$t("offers3")}}</button>
      <button class="close-button" @click="closePopup">{{$t("offers4")}}</button>
    </div>
  </div>
</template>

<style scoped>
.photos{
  margin:10px;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.image1 {
  width: 20%;
  height: 20%;
  margin: 10px;
}
.image2 {
  width: 25%;
  height: 28%;
  margin: 10px;
}
.button-container {
  margin-top: 20px;
}
.join-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.close-button {
  background-color: #DC3545;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
}
.membership-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
  text-align: center;
}
</style>