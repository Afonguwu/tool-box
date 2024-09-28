import { createRouter, createWebHashHistory } from 'vue-router';
const HomeView = () => import('@/views/HomeView.vue');
const KrtcMapView = () => import('@/views/KrtcMapView.vue');

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/krtcMap',
      name: '高雄捷運輕軌地圖',
      component: KrtcMapView
    }
  ]
});

export default router;
