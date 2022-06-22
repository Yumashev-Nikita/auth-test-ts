import { createRouter, createWebHashHistory } from 'vue-router';
import Workers from '../components/Workers.vue'
import WorkerWindow from '../components/WorkerWindow.vue'
import Authentification from '../components/Authentification.vue'
import RestoreRequest from '../components/RestoreRequest.vue'
import Registration from '../components/Registration.vue'
import Profile from '../components/Profile.vue'



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
    path: '/register',
    component: Registration,
  },
  {
    path: '/restore/request',
    component: RestoreRequest,
  },
  {
    path: '/profile',
    component: Profile,
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