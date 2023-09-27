<script setup>
import RestaurantsOptions from "@/components/restaurant-options.vue";
import ToolbarRestaurants from "@/components/toolbar.vue";
</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/restaurants">Restaurants</router-link>
  </nav>

  <main>
    <router-view></router-view>
  </main>

</template>

<style scoped>

</style>
