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
  <div class="card-container">
    <!-- Primer card -->
    <div class="card">
      <div class="card-content">
        <div class="restaurant-image">
          <img :src="images.restaurants1" alt="restaurants1">
        </div>
        <div class="restaurant-info">
          <h2>Nombre del Restaurante</h2>
          <p>Ubicación: Ciudad, País</p>
          <p>Tiempo de Atención: Horario</p>
          <p>Comidas: Tipo de Comidas</p>
          <p>Fechas No Laborables: Fechas</p>
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
          <h2>Nombre del Restaurante 2</h2>
          <p>Ubicación: Ciudad 2, País 2</p>
          <p>Tiempo de Atención: Horario 2</p>
          <p>Comidas: Tipo de Comidas 2</p>
          <p>Fechas No Laborables: Fechas 2</p>
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
          <h2>Nombre del Restaurante 3</h2>
          <p>Ubicación: Ciudad 3, País 3</p>
          <p>Tiempo de Atención: Horario 3</p>
          <p>Comidas: Tipo de Comidas 3</p>
          <p>Fechas No Laborables: Fechas 3</p>
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
          <h2>Nombre del Restaurante 4</h2>
          <p>Ubicación: Ciudad 4, País 4</p>
          <p>Tiempo de Atención: Horario 4</p>
          <p>Comidas: Tipo de Comidas 4</p>
          <p>Fechas No Laborables: Fechas 4</p>
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
}

.card-content {
  /* Estilo para el contenido del card */
  display: flex;
  padding: 10px;
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
</style>

