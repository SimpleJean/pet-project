import { createRouter, createWebHistory } from 'vue-router';
import MainApp from '../components/MainApp.vue';
import CreateCV from '../components/buttons/CreateCV.vue';
import Login from '../components/buttons/Login.vue';

const routes = [
  { path: '/', component: MainApp },
  { path: '/cv', component: CreateCV },
  { path: '/login', component: Login },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
