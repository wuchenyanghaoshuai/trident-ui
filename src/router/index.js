import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('../views/HomeView2.vue')
    }
  ]
})


// 导航守卫
router.beforeEach((to, from, next) => {
  // 检查路由是否需要登录
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 如果需要登录，检查用户是否已登录
    // 假设你有一个 isAuthenticated 方法来判断用户是否已登录
    if (!isAuthenticated()) {
      // 未登录，重定向到登录页
      next('/login')
    } else {
      // 已登录，继续导航
      next("/")
    }
  } else {
    // 不需要登录，直接继续导航
    next()
  }
})
export default router
