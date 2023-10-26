<template>
  <header>
    <ToolbarRestaurants/>
  </header>
  <Card>
    <template #title>Perfil</template>
    <template #content>
      <div v-if="profileData">
        <p><strong>Nombre:</strong> {{ profileData.name }}</p>
        <p><strong>Correo Electrónico:</strong> {{ profileData.email }}</p>
        <p><strong>Número de Teléfono:</strong> {{ profileData.phoneNumber }}</p>
        <p><strong>Dirección:</strong> {{ profileData.address }}</p>
        <p><strong>Edad:</strong> {{ profileData.age }}</p>
        <p><strong>Descripción:</strong> {{ profileData.description }}</p>
      </div>
      <div v-else>
        <p>Cargando perfil...</p>
      </div>
    </template>
  </Card>
</template>

<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";
import axios from "axios";

export default {
  name:"profile",
  components: {ToolbarRestaurants},
  data() {
    return {
      profileData: null,
    };
  },
  mounted() {
    axios.get('http://localhost:3000/accounts')
        .then((response) => {
          this.profileData = response.data;
        })
        .catch((error) => {
          console.error('Error al cargar el perfil:', error);
        });
  },
};
</script>

<style scoped>
</style>
