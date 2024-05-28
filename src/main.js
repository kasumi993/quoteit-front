import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const global = app.config.globalProperties;
export default global;

import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_LOCATION;
axios.defaults.headers.common.Accept = 'application/json'

app.config.globalProperties.$http = axios;



app.mount('#app')
