 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

 const routes: Array<RouteRecordRaw> = [
   {
     path: '/login',
     name: 'Login',
     meta: {
         title: '登录',
         keepAlive: true,
         requireAuth: false
     },
     component: () => import('@/pages/login.vue')
   },
   {
       path: '/',
       name: 'Index',
       meta: {
           title: '首页',
           keepAlive: true,
           requireAuth: true
       },
       component: () => import('@/pages/index.vue')
   },
   {
         path: '/canvas/present',
         name: 'Present',
         meta: {
             title: 'canvas-present',
             keepAlive: true,
             requireAuth: true
         },
         component: () => import('@/pages/canvas/present.vue')
   }
 ]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;