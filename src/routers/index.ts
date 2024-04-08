import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import homePage from '../pages/home.vue'
import aboutPage from '../pages/about.vue'
import newsPage from '../pages/news.vue'
import storePage from '../pages/store.vue'


const routes: Array<RouteRecordRaw> = [
    {
        name:'Home',
        path:'/',
        component:homePage,
    },
    {
      name:'about',
      path:'/about',
      component:aboutPage,
    },
    {
      name:'news',
      path:'/news',
      component:newsPage,
    },
    {
      name:'store',
      path:'/store',
      component:storePage,
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
