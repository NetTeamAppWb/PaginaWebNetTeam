<template>
  <header>
    <ToolbarRestaurants />
  </header>
  <div class="card-container">
    <Card class="profile-card">
      <template #title>
        <h1 style="font-size: 36px; font-weight: bold; color: orangered; margin-bottom: 20px;">{{$t("title_profile")}}</h1>
      </template>
      <template #content>
        <div class="profile-container" v-if="profileData">
          <div class="profile-image">
            <img src="@/assets/person1.jpg" alt="Imagen de perfil" />
          </div>
          <div class="profile-details">
            <p><strong>{{$t("profile1")}}</strong> {{ profileData.name }}</p>
            <p><strong>{{$t("profile2")}}</strong> {{ profileData.email }}</p>
            <p><strong>{{$t("profile3")}}</strong> {{ profileData.phoneNumber }}</p>
            <p><strong>{{$t("profile4")}}</strong> {{ profileData.address }}</p>
            <p><strong>{{$t("profile5")}}</strong> {{ profileData.age }}</p>
            <p><strong>{{$t("profile6")}}</strong> {{ profileData.description }}</p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";
import {UserApiService} from "@/services/user-api.service";

export default {
  name:"profile",
  components: {ToolbarRestaurants},
  data() {
    return {
      profileData: null,
    };
  },
  async mounted() {
    try {
      const profileService = new UserApiService();
      const response = await profileService.fetchProfileData();
      this.profileData = response.data[0];
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 78vh;
}
.profile-card {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
}
.profile-container {
  display: flex;
  align-items: center;
}
.profile-image {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}
.profile-details {
  flex: 2;
  padding: 20px;
}
</style>
