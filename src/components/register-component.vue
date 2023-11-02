<script>
import {UserApiService} from "@/services/user-api.service";

export default {
  name:"register",
  data() {
    return {
      email: '',
      password: '',
      name: '',
      address: '',
      phoneNumber: '',
      description: '',
      age: '',
      selectedPaymentMethods: [],
      paymentMethods: [
        { name: 'Paypal'},
        { name: 'Yape'},
        { name: 'Plin'},
        { name: 'Tarjeta Credito'},
      ],
    };
  },
  methods: {
    async registerUser() {

      if (!this.email || !this.password || !this.name || !this.phoneNumber || !this.paymentMethods) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }

      const userData = {
        email: this.email,
        password: this.password,
        name: this.name,
        address: this.address,
        phoneNumber: this.phoneNumber,
        description: this.description,
        age: this.age,
        paymentMethods: this.selectedPaymentMethods.map(method => method.name),
      };

      const userApiService = new UserApiService();

      try {
        const response = await userApiService.registerUser(userData);

        if (response.success) {
          alert('Registro Exitoso');
        } else {
          alert('Error en el registro. El correo electrónico ya está en uso o se produjo un error.');
        }
      } catch (error) {
        alert('Error en el registro. Comprueba la conexión o inténtalo más tarde.');
      }
    },
    },
};
</script>

<template>
  <div class="container-register">
    <pv-card>
      <template #title>{{$t("title_register")}}</template>
      <template #content>
        <form @submit="registerUser">
          <div class="form-group">
            <label for="email">{{$t("register1")}}</label>
            <pv-input-text v-model="email" id="email" placeholder="Correo electrónico" style="margin-left: 20px;"></pv-input-text>
          </div>

          <div class="form-group">
            <label for="password">{{$t("register2")}}</label>
            <pv-input-text v-model="password" id="password" placeholder="Contrasenia" style="margin-left: 20px;"></pv-input-text>
          </div>

          <div class="form-group">
            <label for="name">{{$t("register3")}}</label>
            <pv-input-text v-model="name" id="name" placeholder="Name" style="margin-left: 20px;"></pv-input-text>
          </div>

          <div class="form-group">
            <label for="address">{{$t("register4")}}</label>
            <pv-input-text v-model="address" id="address" placeholder="Address" style="margin-left: 20px;"></pv-input-text>
          </div>

          <div class="form-group">
            <label for="phoneNumber">{{$t("register5")}}</label>
            <pv-input-text v-model="phoneNumber" id="phoneNumber" placeholder="PhoneNumber" style="margin-left: 20px;"></pv-input-text>
          </div>

          <div class="form-group">
            <label for="age">{{$t("register6")}}</label>
            <pv-input-text v-model="age" id="age" placeholder="Age" style="margin-left: 20px;"></pv-input-text>
          </div>

          <div class="form-group">
            <label for="paymentMethods">{{$t("register7")}}</label>
            <MultiSelect
                v-model="selectedPaymentMethods"
                :options="paymentMethods"
                optionLabel="name"
                placeholder="Selecciona Métodos de Pago"
                style="width: 100%"
                class="p-fluid"
            />
          </div>

          <div class="form-group">
            <Textarea v-model="description" id="description" rows="5" cols="30" placeholder="Descripción tus gustos"></Textarea>
          </div>

          <button type="submit" class="btn-register">{{$t("register8")}}</button>
        </form>

        <p style="margin-top: 23px;margin-left: 45px;">{{$t("register9")}} <router-link to="/">{{$t("register10")}}</router-link>.</p>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.container-register {
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
  border: 2px solid black;
}

.form-group {
  margin-bottom: 15px;
}

.btn-register {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>