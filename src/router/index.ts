import { createRouter, createWebHashHistory } from 'vue-router';
import Workers from '../components/Workers.vue'
import WorkerWindow from '../components/WorkerWindow.vue'
import Authentification from '../components/Authentification.vue'

const routes = [
  {
    path: '/workers',
    component: Workers,
  },
  {
    path: '/auth',
    component: Authentification,
  },
  {
    path: '/worker/:id',
    name: 'worker',
    component: WorkerWindow,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;