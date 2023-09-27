<script>
export default {
  name: 'Toolbar-restaurants',
};
</script>

<template>
  <div class="toolbar">
    <div class="left">
      <img src="@/assets/logo.jpeg" alt="logoEmprendeChef" class="logo-image">
      <span class="logo">EmprendeChef</span>
      <button class="button">Restaurante</button>
      <button class="button">Pedidos</button>
    </div>
    <div class="right">
      <input type="text" class="search" placeholder="Buscar...">
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F1F1F1;
  color: orange;
  padding: 19px 40px;
  flex-wrap: wrap;
}

.left {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-right: 50px;
}

.button {
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 16px;
  margin-right: 59px;
  cursor: pointer;
}

.right {
  display: flex;
  align-items: center;
}

.search {
  padding: 8px 10px;
  border: 2px solid #333;
  border-radius: 5px;
  outline: none;
  width: 400px;
  transition: border-color 0.3s;
}

.search:focus {
  border-color: #007bff;
}

.logo-image {
  width: 110px;
  margin-right: 15px;
}


</style>

