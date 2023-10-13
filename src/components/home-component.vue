<template>
  <header>
    <ToolbarRestaurants/>
  </header>
    <div>
        <h1>{{$t("explore")}}</h1>
        <GoogleMap api-key="AIzaSyCQql0ChGSqMW2sG4F9nD4LnHsqOwLTY54" style="width: 100%; height: 400px" :center="centro" :zoom="15">
            <Marker :options="{ position: centro }" />
        </GoogleMap>
        <h1>{{$t("food")}}</h1>
        <div class="card-container">
        <Card class="card-item" style="width: 25em">
            <template #header>
                <img alt="user header" src="@/assets/Makis.jpg" width="400" height="200"/>
            </template>
            <template #title>{{$t("food2")}} </template>
            <template #content>
                <p>{{$t("food11")}}</p>
            </template>
            <template #footer>
                <pv-button icon="pi pi-check" label="Order" />
                <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>

        <Card class="card-item" style="width: 25em">
            <template #header>
                <img alt="user header" src="@/assets/Pollo.png" width="400" height="200"/>
            </template>
            <template #title>{{$t("food1")}} </template>
            <template #content>
                <p>{{$t("food22")}}</p>
            </template>
            <template #footer>
                <pv-button icon="pi pi-check" label="Order" />
                <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>

          <Card class="card-item" style="width: 25em">
            <template #header>
              <img alt="user header" src="@/assets/Ceviche.jpg" width="400" height="200"/>
            </template>
            <template #title>{{$t("food3")}} </template>
            <template #content>
              <p>{{$t("food33")}}</p>
            </template>
            <template #footer>
              <pv-button icon="pi pi-check" label="Order" />
              <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
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
            centro: { lat: -12.090539, lng: -77.029576 },
        };
    },
});
</script>
<style scoped>
.card-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}

.card-item {
    width: calc(33.33% - 10px);
    margin-bottom: 20px;
}

</style>