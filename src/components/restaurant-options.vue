<script>
import restaurants1 from '@/assets/restaurante1.png';
import restaurants2 from '@/assets/restaurante2.png';
import restaurants3 from '@/assets/restaurante3.png';
import restaurants4 from '@/assets/restaurante4.png';
import Card from "primevue/card";
export default{
  name:"restaurants-options",
  components: {
    Card,
  },
  data() {
    return {
      images: {
        restaurants1,
        restaurants2,
        restaurants3,
        restaurants4,
      },
    };
  },
};

</script>

<template>
  <div class="right">
    <input type="text" class="search" placeholder="Search...">
  </div>

  <div class="card-container">
    <!-- Primer card -->
    <div class="card">
      <div class="card-content">
        <div class="restaurant-image">
          <img :src="images.restaurants1" alt="restaurants1">
        </div>
        <div class="restaurant-info">
          <h2>{{$t("restaurant1")}}</h2>
          <p>{{$t("location1")}}</p>
          <p>{{$t("servicetime1")}}</p>
          <p>{{$t("meals1")}}</p>
          <p>{{$t("dates1")}}</p>
          <button class="info-button">{{$t("information1")}}</button>
        </div>
      </div>
    </div>

    <!-- Segundo card -->
    <div class="card">
      <div class="card-content">
        <div class="restaurant-image">
          <img :src="images.restaurants2" alt="restaurants2">
        </div>
        <div class="restaurant-info">
          <h2>{{$t("restaurant2")}}</h2>
          <p>{{$t("location2")}}</p>
          <p>{{$t("servicetime2")}}</p>
          <p>{{$t("meals2")}}</p>
          <p>{{$t("dates2")}}</p>
          <button class="info-button">{{$t("information2")}}</button>
        </div>
      </div>
    </div>

    <!-- Tercero card -->
    <div class="card">
      <div class="card-content">
        <div class="restaurant-image">
          <img :src="images.restaurants3" alt="restaurants3">
        </div>
        <div class="restaurant-info">
          <h2>{{$t("restaurant3")}}</h2>
          <p>{{$t("location3")}}</p>
          <p>{{$t("servicetime3")}}</p>
          <p>{{$t("meals3")}}</p>
          <p>{{$t("dates3")}}</p>
          <button class="info-button">{{$t("information3")}}</button>
        </div>
      </div>
    </div>

    <!-- Cuarto card -->
    <div class="card">
      <div class="card-content">
        <div class="restaurant-image">
          <img :src="images.restaurants4" alt="restaurants4">
        </div>
        <div class="restaurant-info">
          <h2>{{$t("restaurant4")}}</h2>
          <p>{{$t("location4")}}</p>
          <p>{{$t("servicetime4")}}</p>
          <p>{{$t("meals4")}}</p>
          <p>{{$t("dates4")}}</p>
          <button class="info-button">{{$t("information4")}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  /* Estilo para el card */
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px;
  flex: 1;
}

.card-container {
  /* Estilo para el contenedor de los cards */
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card-content {
  /* Estilo para el contenido del card */
  display: flex;
  padding: 20px;
  background-color: #f9f9f9;
  box-sizing: border-box;

}

.restaurant-image {
  /* Estilo para la imagen del restaurante */
  flex: 1;
  max-width: 200px;
}

.restaurant-image img {
  /* Estilo para la imagen dentro del card */
  width: 100%;
  height: auto;
}

.restaurant-info {
  /* Estilo para la información del restaurante */
  flex: 2;
  padding: 10px;
}

h2 {
  /* Estilo para el título */
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  /* Estilo para la información */
  font-size: 14px;
  margin-bottom: 5px;
}

.search {
  padding: 8px 10px;
  border: 2px solid #333;
  border-radius: 5px;
  outline: none;
  width: 400px;
  transition: border-color 0.3s;
  margin-top: 20px;
}

.search:focus {
  border-color: #007bff;
}

.info-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px; /* Espacio superior para separarlo del texto */
  float: right; /* Coloca el botón a la derecha */
}

.info-button:hover {
  background-color: #0056b3;
  cursor: pointer;
}
</style>

