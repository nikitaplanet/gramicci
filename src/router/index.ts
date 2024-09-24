import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '',
        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return {top: 0};
    },
});
export default router;
