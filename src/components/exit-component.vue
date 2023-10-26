<script>

export default {
  name:'exit',
};

</script>

<template>
  <div class="container">
    <Card>
      <template #title>
        <div class="centered-title">Adios</div>
      </template>
      <template #header>
        <div class="centered-image">
          <img src="@/assets/herta.gif">
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("@/assets/fondocomida.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.centered-title {
  text-align: center;
}
.centered-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>