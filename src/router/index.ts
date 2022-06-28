import { createRouter, createWebHashHistory } from 'vue-router';
import Workers from '../pages/Workers.vue'
import WorkerWindow from '../pages/WorkerWindow.vue'
import Authentification from '../pages/Authentification.vue'
import RestoreRequest from '../pages/RestoreRequest.vue'
import RestoreCommit from '../pages/RestoreCommit.vue'
import Registration from '../pages/Registration.vue'
import Profile from '../pages/Profile.vue'



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
    path: '/restore/commit/:token',
    component: RestoreCommit,
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
