import { createRouter, createWebHashHistory } from 'vue-router';
const homeView = () => import('@/views/HomeView.vue');
const krtcView = () => import('@/views/krtcMapView.vue');

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
      meta: {
        title: 'Tool Box',
        icon: 'img/box.png',
        darkIcon: 'img/box-light.png'
      }
    },
    {
      path: '/krtcMap',
      name: '高雄捷運輕軌地圖',
      component: krtcView,
      meta: {
        title: '高雄捷運輕軌地圖',
        icon: 'img/rail.png',
        darkIcon: 'img/rail-light.png'
      }
    }
  ]
});

function updateFavicon(iconUrl) {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = iconUrl;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = iconUrl;
    document.head.appendChild(newLink);
  }
}

router.beforeEach((to, from, next) => {
  const icon = to.meta.icon;
  if (icon) {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkIcon = to.meta.darkIcon || icon;
    updateFavicon(isDarkMode ? darkIcon : icon);
  }

  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
