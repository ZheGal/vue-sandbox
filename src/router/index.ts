import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormView from '../views/FormView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/form',
      name: 'form-page',
      component: FormView,
    },
    {
      path: '/modals',
      name: 'modals-page',
      component: () => import('../views/ModalView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/videos',
      name: 'videos-page',
      component: () => import('../views/VideosPage.vue'),
    },
    {
      path: '/dark',
      name: 'dark-page',
      component: () => import('../views/DarkTheme.vue'),
    },
    {
      path: '/marked',
      name: 'marked-page',
      component: () => import('../views/MarkedView.vue'),
    },
  ],
});

export default router;
