<script>
import {UserApiService} from "@/services/user-api.service";

export default{
  name:"login",
  data(){
    return{
      email:"",
      password:"",
    };
  },
  methods: {
    async attemptLogin() {
      try {
        const userApiService = new UserApiService();
        const response = await userApiService.getUserByEmailAndPassword(this.email, this.password);

        if (response.data.length > 0) {

          this.$router.push('/home');
        } else {
          alert('Inicio de sesión fallido');
        }
      } catch (error) {
        alert('Error en usuario y/o password');
      }
    },
  },
};

</script>

<template>
  <div class="container">
    <pv-card style="width: 420px; margin: 0 auto;">
      <template #title> {{$t("title_login")}} </template>
      <template #content>
        <div class="form-group">
          <label for="email">{{$t("login1")}}</label>
          <pv-input-text v-model="email" id="email" placeholder="Correo electrónico" style="margin-left: 20px;"></pv-input-text>
        </div>
        <div class="form-group">
          <label for="password">{{$t("login2")}}</label>
          <pv-input-text v-model="password" id="password" type="password" placeholder="Contraseña" style="margin-left: 20px;"></pv-input-text>
        </div>
        <pv-button @click="attemptLogin" style="margin-top: 10px; margin-left: 130px;">{{$t("login3")}}</pv-button>
        <p style="margin-top: 23px;margin-left: 75px;">{{$t("login4")}} <router-link to="/register">{{$t("login5")}}</router-link>.</p>
      </template>
    </pv-card>
  </div>
</template>

<style>
.form-group {
  margin-bottom: 20px;
}
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

</style>