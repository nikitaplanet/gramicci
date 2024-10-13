import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../src/assets/scss/index.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import {VueQueryPlugin} from '@tanstack/vue-query';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(VueQueryPlugin).use(router).use(ElementPlus).mount('#app');
