import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../src/assets/scss/index.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount('#app');
