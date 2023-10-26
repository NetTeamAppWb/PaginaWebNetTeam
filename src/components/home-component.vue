<template>
  <header>
    <ToolbarRestaurants/>
  </header>
    <div>
        <h1>{{$t("explore")}}</h1>
        <GoogleMap api-key="AIzaSyCQql0ChGSqMW2sG4F9nD4LnHsqOwLTY54" style="width: 100%; height: 400px" :center="center" :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>

        <h1>{{$t("food")}}</h1>

        <div class="card-container">
        <Card class="card-item">
            <template #header>
                <img alt="user header" src="@/assets/sushi.jpg"/>
            </template>
            <template #title>{{$t("food2")}} </template>
            <template #content>
                <p>{{$t("food11")}}</p>
            </template>
            <template #footer>
                <pv-button icon="pi pi-check" label="Order" />
            </template>
        </Card>

        <Card class="card-item">
            <template #header>
                <img alt="user header" src="@/assets/pollo.jpg"/>
            </template>
            <template #title>{{$t("food1")}} </template>
            <template #content>
                <p>{{$t("food22")}}</p>
            </template>
            <template #footer>
                <pv-button icon="pi pi-check" label="Order" />
            </template>
        </Card>

          <Card class="card-item">
            <template #header>
              <img alt="user header" src="@/assets/ceviche.png"/>
            </template>
            <template #title>{{$t("food3")}} </template>
            <template #content>
              <p>{{$t("food33")}}</p>
            </template>
            <template #footer>
              <pv-button icon="pi pi-check" label="Order" />
            </template>
          </Card>
        </div>

    </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import ToolbarRestaurants from "@/components/toolbar-component.vue";

export default defineComponent({
  name:"home",
  components: {ToolbarRestaurants, GoogleMap, Marker },
    data() {
        return {
            center: { lat: -12.090539, lng: -77.029576 },
        };
    },
});
</script>

<style scoped>

.card-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.card-item {
  width: calc(33.33% - 20px);
  margin-right: 20px;
}

.card-item img {
  max-width: 100%;
  height: auto;
}

.card-item p {
  margin: 10px 0;
}

.card-item img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  height: auto;
}

</style>