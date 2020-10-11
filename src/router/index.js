import Vue from 'vue';
import VueRouter from 'vue-router';
import Confirm from '../views/Confirm.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Confirm',
		component: Confirm,
	},
	{
		path: '*',
		component: Confirm,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
