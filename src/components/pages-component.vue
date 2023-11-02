<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";
export default{
  name:"pages",
  components: {ToolbarRestaurants},
};
</script>

<template>
  <header>
    <ToolbarRestaurants />
  </header>
  <div class="card-container">
    <Card>
      <template #title>
        <h1 style="font-size: 36px; font-weight: bold; color: orangered; margin-bottom: 20px;">{{$t("title_pages")}}</h1>
      </template>
      <template #content>
        <div class="card-content">
          <div class="card-image">
            <img src="@/assets/membre.png" alt="Imagen de membresía" />
          </div>
          <div class="plan-section">
            <div class="content">
              <div class="tabla">
                <h2>{{$t("pages1")}}</h2>
                <h3>{{$t("pages2")}}</h3>
                <p>{{$t("pages3")}}</p>
                <pv-button icon="pi pi-check" label="Suscribirse" />
              </div>
              <div class="tabla">
                <h2>{{$t("pages4")}}</h2>
                <h3>{{$t("pages5")}}</h3>
                <p>{{$t("pages6")}}</p>
                <pv-button icon="pi pi-check" label="Suscribirse" />
              </div>
              <div class="tabla">
                <h2>{{$t("pages7")}}</h2>
                <h3>{{$t("pages8")}}</h3>
                <p>{{$t("pages9")}}</p>
                <pv-button icon="pi pi-check" label="Suscribirse" />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <p class="emotional">{{$t("pages10")}}</p>
      </template>
    </Card>
  </div>
</template>


<style scoped>

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 86vh;
}
.card-content {
  display: flex;
  align-items: center;
}
.card-image {
  flex: 1;
  padding: 20px;
}
.card-image img {
  max-width: 100%;
}
.plan-section {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.content {
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: orange;
  border: 1px solid black;
  border-radius: 10px;
}
.tabla {
  width: 33%;
  height: 550px;
  margin: auto;
  border-radius: 10px;
  padding: 60px;
  text-align: center;
  flex-grow: 1;
  color: #f8f9fc;
  font-family: 'Outfit', sans-serif;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s all;
  border: 1px solid white;
}
.tabla:hover {
  background: #f3a703;
  color: #110101;
  transform: scale(1.1);
}
.tabla h2,
.tabla h3,
.tabla p {
  font-size: 20px;
  margin-bottom: 20px;
  color: #f8f9fc;
}
.tabla h3 {
  font-size: 25px;
}

.emotional{
  font-style: italic;
  color: #555;
  text-align: center;
  padding: 20px;
}
@media screen and (max-width: 1000px) {
    .tabla {
        width: 45%;
        flex-grow: initial;
        max-width: none;
        margin-bottom: 40px;
    }
}
@media screen and (max-width: 700px) {
    .tabla {
        width: 55%;
        height: 20%;
        padding: 30px;
    }

    .tabla h2 {
        margin-top: 40px;
    }
}

</style>