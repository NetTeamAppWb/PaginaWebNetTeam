<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";
import {UserApiService} from "@/services/user-api.service";
export default{
  name:"restaurants-options",
  components: {
    ToolbarRestaurants
  },
  data() {
    return {
      restaurants: [],
    };
  },
  mounted() {
    const restaurantApiService = new UserApiService();
    restaurantApiService.getRestaurants()
        .then((response) => {
          this.restaurants = response.data;
        })
        .catch((error) => {
          console.error("Error fetching restaurants: " + error);
        });
  },
  methods: {
    redirecthistory() {
      this.$router.push('/orders-history');
    }
  }
};

</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>

  <div>
    <div class="restaurant-container">
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-item">
      <Card class="restaurant-card">
        <template #header>
          <img :src="restaurant.img" alt="Restaurant Image" class="restaurant-image"/>
        </template>
        <template #title>{{ restaurant.name }}</template>
        <template #content>
          <div>
            <p>Owner: {{ restaurant.owner }}</p>
            <p>Location: {{ restaurant.location }}</p>
            <p>Schedule: {{ restaurant.schedule }}</p>
            <p>Calls: {{ restaurant.calls }}</p>
            <ul>
              <li v-for="food in restaurant.foods" :key="food.name">
                <strong>{{ food.name }}</strong>
                <p>Price: {{ food.price }}</p>
                <p>Description: {{ food.description }}</p>
              </li>
            </ul>
          </div>
        </template>
        <template #footer>
          <pv-button icon="pi pi-check" label="Order" @click="redirecthistory"/>
        </template>
      </Card>
    </div>
    </div>
  </div>
</template>


<style scoped>

.restaurant-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.restaurant-item {
  width: calc(33.33% - 20px);
  margin-right: 20px;
}

.card img {
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;
}

.restaurant-card {
  margin: 20px;
}

.restaurant-image {
  width: 100%;
  max-height: 230px;
  object-fit: cover;
}


</style>

