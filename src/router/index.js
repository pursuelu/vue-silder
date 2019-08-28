import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: () => import('../views/home/index'),
    meta: {
      requireAuth: true,
      isShowBottomMenu: true,
      isShowNav: true,
      keepAlive: true
    }
  }
]
// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
const router = new Router({ routes });

export {
  router
};