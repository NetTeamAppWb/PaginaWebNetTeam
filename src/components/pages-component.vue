<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";
import {ref} from "vue";

export default{
  name:"pages",
  components: {ToolbarRestaurants},
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        register() {
            // TODO: Implementar el registro de usuario.
        },
    },


};

</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>

    <div class="p-card">
        <div class="p-card-header">
            Obten una membresia
        </div>
        <div class="p-card-body">
            <form>
                <div class="p-field">
                    <label for="name">Nombre</label>
                    <pv-input-text id="name" type="text" placeholder="Nombre completo" />
                </div>
                <div class="p-field">
                    <label for="email">Email</label>
                    <pv-input-text id="email" type="email" placeholder="@gmail.com" />
                </div>
                <div class="p-field">
                    <label for="password">Contraseña</label>
                    <pv-input-text id="password" type="password" />
                </div>
                <div class="p-field">
                    <label for="mobile">Móvil</label>
                    <pv-input-text id="mobile" type="text" placeholder="+51"/>
                </div>
                <div class="p-field">
                    <label for="card">Numero de tarjeta</label>
                    <pv-input-text id="card" type="text" placeholder="1234-5678-9123-4567"/>
                </div>
                <div class="p-field">
                    <label for="tarjeta">MM/AA</label>
                    <Calendar v-model="date" showIcon placeholder="05/28"/>
                    <label class="pi pi-credit-card" for="cvv">CVV</label>
                    <pv-input-text  id="cvv" type="text" placeholder="123"/>
                </div>
                <img alt="VisaNet" src="@/assets/Visa.png" width="350" height="100"/>

                <div class="p-field">
                    <pv-button type="submit">Registrarse</pv-button>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
.p-card {
    width: 400px;
    margin: 0 auto;
}
.p-card-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
}
.p-card-body {
    padding: 10px;
}
.p-field {
    margin-bottom: 10px;
}
.p-field label {
    display: block;
    margin-bottom: 5px;
}
.p-field input  {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
}



</style>