import { createApp } from 'vue'; 
import App from './App.vue';
import router from '../Router/index.js';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import naive from 'naive-ui';
const app = createApp(App)

app.use(router);
app.use(naive); 
app.mount('#app');
