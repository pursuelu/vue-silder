//import store from '../store'
import { router } from './index'

router.beforeEach((to, from, next) => {
  next()
  // store.state.app.pageLoading=true;
  // //以下是加入验证
  // if (to.meta.requireAuth) { //判断前往的界面是否需要登陆
  //     if (store.state.user.user.token) { // 是否已经登陆
  //         next();
  //     }
  //     else {
  //         next({
  //             path: '/login',
  //             //query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //         })
  //     }
  // }
  // else {
  //     next();
  // }
})
router.afterEach((to, from) => {
  //store.state.app.pageLoading = false
  // const title = to.meta && to.meta.title;
  // if (title) {
  //     document.title = title;
  // }
})

export default router
