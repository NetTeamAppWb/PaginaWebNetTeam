import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./locales/i18n";
import PrimeVue from "primevue/config";

import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import router from "@/router";

const app= createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.mount('#app')