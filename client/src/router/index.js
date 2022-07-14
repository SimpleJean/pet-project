import { createRouter, createWebHistory } from 'vue-router';
import MainApp from '../components/MainApp.vue';
import CreateCV from '../components/buttons/CreateCV.vue';
import Login from '../components/buttons/Login.vue';

const routes = [
  { path: '/', component: MainApp },
  { path: '/cv', component: CreateCV },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
