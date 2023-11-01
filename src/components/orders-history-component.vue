c<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";
import axios from "axios";

export default {
  name:"orders-history",
  components: {ToolbarRestaurants},
  data() {
    return {
      history: null,
    };
  },
  mounted() {
    this.fetchHistory();
  },
  methods: {
    fetchHistory() {
      axios.get('http://localhost:3000/history')
          .then((response) => {
            this.history = response.data.map(history => ({
              name: history.name,
              img: history.img,
              category: history.category,
              food: history.foods[0],
            }));
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },
  },
};
</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>
  <div class="card">
    <DataTable :value="history" tableStyle="min-width: 50rem" :selectionMode="null" class="custom-table">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Restaurants</span>
        </div>
      </template>
      <Column field="name" header="Name"></Column>
      <Column header="Image">
        <template #body="slotProps">
          <img
              :src="slotProps.data.img"
              :alt="slotProps.data.name"
              style="max-width: 100px; max-height: 100px; object-fit: cover; border-radius: 10px;"
          />
        </template>
      </Column>
      <Column field="category" header="Category"></Column>
      <Column field="food" header="TypeFood">
        <template #body="slotProps">
          {{ slotProps.data.food.name }}
        </template>
      </Column>
      <Column field="food" header="Price">
        <template #body="slotProps">
          {{ slotProps.data.food.price }}
        </template>
      </Column>
      <Column header="Update">
        <template #body="slotProps">
          <button @click="editRow(slotProps.data)" class="p-button p-button-icon custom-update-button">
            <i class="pi pi-pencil"></i>
          </button>
        </template>
      </Column>
      <Column header="Delete">
        <template #body="slotProps">
          <button @click="deleteRow(slotProps.data)" class="p-button p-button-icon custom-delete-button">
            <i class="pi pi-trash"></i>
          </button>
        </template>
      </Column>
      <template #footer> In total there are {{ history ? history.length : 0 }} restaurants. </template>
    </DataTable>
  </div>
</template>

<style scoped>
.custom-table {
  margin: 20px;
}

.custom-update-button {
  width: 20px;
  background-color: blue;
  color: white;
}

.custom-delete-button {
  width: 24px;
  background-color: red;
  color: white;
}

</style>
