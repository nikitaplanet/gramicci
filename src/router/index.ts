import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
		children: [],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	scrollBehavior() {
		return {top: 0};
	},
});
export default router;
