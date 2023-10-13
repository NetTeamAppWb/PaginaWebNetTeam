import './assets/style.css'
import { createApp } from 'vue'

import App from './App.vue'
import i18n from "./locales/i18n";
import PrimeVue from "primevue/config";
import Card from 'primevue/card';
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Textarea from 'primevue/textarea';


import router from "@/router";

const app= createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component("pv-card", Card);
app.component("pv-button", Button);
app.component('pv-input-text', InputText);
app.component('MultiSelect', MultiSelect);
app.component('Textarea', Textarea);

app.mount('#app')

