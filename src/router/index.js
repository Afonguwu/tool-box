import { createRouter, createWebHashHistory } from 'vue-router';
const homeView = () => import('@/views/HomeView.vue');
const krtcView = () => import('@/views/krtcMapView.vue');

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/krtcMap',
      name: '高雄捷運輕軌地圖',
      component: krtcView
    }
  ]
});

export default router;
