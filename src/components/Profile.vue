<template>
  <div class="perfil">
    <!-- Card de perfil -->
    <div class="card-perfil">
      <!-- Foto de perfil -->
      <div class="foto-perfil">
        <img src="@/assets/perfil.jpg" alt="Foto de perfil">
      </div>

      <!-- Información del perfil -->
      <div class="informacion-perfil">
        <h2>{{$t("profile1")}} {{ nombreCompleto }}</h2>
        <p>{{$t("profile2")}} {{ email }}</p>
        <p>{{$t("profile3")}} {{ telefono }}</p>
        <p>{{$t("profile4")}} {{ platosFavoritos }}</p>
        <p>{{$t("profile5")}} {{ metodosPago }}</p>
        <p>{{$t("profile6")}} {{ tiempoCuenta }}</p>
        <!-- Agrega más información según sea necesario -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombreCompleto: "Ana Alcantara, Morales",
      email: "anaalcantara12@gmail.com",
      telefono: "953-426-7190",
      platosFavoritos: "Pizza, Sushi, Ensaladas",
      metodosPago: "Tarjeta de Crédito, PayPal",
      tiempoCuenta: "2 meses",
    };
  },
};
</script>

<style scoped>
.perfil {
  display: flex;
  align-items: center;
}

.card-perfil {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
}

.foto-perfil {
  width: 230px; /* Tamaño de la foto de perfil */
  height: 230px; /* Tamaño de la foto de perfil */
  border-radius: 50%; /* Borde redondeado para la foto de perfil */
  overflow: hidden; /* Evitar que la imagen se desborde */
  margin-right: 20px; /* Espacio entre la foto y la información del perfil */
}

.foto-perfil img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
