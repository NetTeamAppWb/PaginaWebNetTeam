<script setup>
import HistorialItem from './HistorialItem.vue'
</script>

<template>
  <img alt="NetTeam logo" class="logo" src="./assets/logoNetTeam.png" width="300" height="125" />

  <div>
    <h1><b>Historial de Pedidos</b></h1>
  </div>
  <HistorialItem>
    <div class="lugar1">
      <img class="logopardos" src="./../assets/Logo_Pardos.jpg" alt="" width="181" height="181">
    </div>
    <template #heading>Agosto</template>
    <b>Pardos Chicken</b>
    <br>
    Agosto 4, 2023
    <br>
    Monto Total: S/. 42
  </HistorialItem>

  <HistorialItem>
    <div class="lugar2">
      <img class="BurgerKing" src="./../assets/BK_Logo.png" alt="" width="181" height="181">
    </div>
    <template #heading>Junio</template>
    <b>Burger King</b>
    <br>
    Junio 3, 2023
    <br>
    Monto Total: S/. 36
  </HistorialItem>

  <HistorialItem>
    <div class="lugar3">
      <img class="Shagy" src="./../assets/shagy_logo.jpg"  alt="" width="181" height="181">
    </div>
    <template #heading> </template>
    <b>Shagy Food Truck</b>
    <br>
    Junio 21, 2023
    <br>
    Monto Total: S/. 27
  </HistorialItem>

  <HistorialItem>
    <div class="lugar4">
      <img class="Crepes" src="./../assets/CrepesyWaffles_Logo.png" alt="" width="181" height="181">
    </div>
    <template #heading>Julio</template>
    <b>Crepes & Waffles</b>
    <br>
    Julio 15, 2023
    <br>
    Monto Total: S/. 18
  </HistorialItem>
  <HistorialItem>
    <div class="lugar5">
      <img class="BurgerKing2" src="./../assets/BK_Logo.png" alt="" width="181" height="181">
    </div>
    <template #heading> </template>
    <b>Burger King</b>
    <br>
    Julio 17, 2023
    <br>
    Monto Total: S/. 12
  </HistorialItem>
  <HistorialItem>
    <div class="lugar6">
      <img class="Shagy2" src="./../assets/shagy_logo.jpg"  alt="" width="181" height="181">
    </div>
    <template #heading> </template>
    <b>Shagy Food Truck</b>
    <br>
    Julio 27, 2023
    <br>
    Monto Total: S/. 35
  </HistorialItem>


</template>





