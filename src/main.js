import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route';

import { createPinia } from 'pinia'

// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

// Vue Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
    // You can set your default options here
};


const pinia = createPinia()

const app = createApp(App);


app.use(Toast, options);

app.use(pinia)
app.use(router);
app.mount('#app')

