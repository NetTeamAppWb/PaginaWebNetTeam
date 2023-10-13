<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";

export default {
  name:"orders-history",
  components: {ToolbarRestaurants},
};
</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>
  <div>
    <div>
      <h2 class="titulo">{{$t("ordershistory")}}</h2>
      <div class="historiales-container">
        <!-- Primer Historial -->
        <div class="historial">
          <!-- Imagen a la izquierda -->
          <div class="image">
            <img src="@/assets/Logo_Pardos.jpg" alt="Logo Pardos Chicken">
          </div>
          <!-- Descripción a la derecha -->
          <div class="description">
            <p>{{$t("time1")}}</p>
            <p>{{$t("Name1")}}</p>
            <p>{{$t("frequency1")}}</p>
          </div>
        </div>
        <!-- Segundo Historial -->
        <div class="historial">
          <!-- Imagen a la izquierda -->
          <div class="image">
            <img src="@/assets/BK_Logo.png" alt="Logo Burken King">
          </div>
          <!-- Descripción a la derecha -->
          <div class="description">
            <p>{{$t("time2")}}</p>
            <p>{{$t("Name2")}}</p>
            <p>{{$t("frequency2")}}</p>
          </div>
        </div>
        <!-- Tercer Historial -->
        <div class="historial">
          <!-- Imagen a la izquierda -->
          <div class="image">
            <img src="@/assets/shagy_logo.jpg" alt="Logo Burger Shagy">
          </div>
          <!-- Descripción a la derecha -->
          <div class="description">
            <p>{{$t("time3")}}</p>
            <p>{{$t("Name3")}}</p>
            <p>{{$t("frequency3")}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.titulo {
  font-size: 24px;
  margin-bottom: 20px;
}

.image {
  flex: 1;
  max-width: 100px;
}

.image img {
  width: 100%;
  height: auto;
}

.description {
  flex: 2;
  padding: 10px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  margin-bottom: 5px;
}

.historiales-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.historial {
  display: flex;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
}

.image {
  flex: 1;
}

.image img {
  width: 100%;
  height: auto;
}

.description {
  flex: 2;
}
</style>
