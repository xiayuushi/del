/**
 * @Author: xiayuushi@qq.com xiayuushi@163.com
 * @Date: 2023-01-04 10:11:51
 * @LastEditors: xiayuushi@qq.com xiayuushi@163.com
 * @LastEditTime: 2023-01-04 10:16:58
 * @FilePath: \temp\tempv3\src\router\index.js
 * @Description: 
 * @Copyright(c) 2023 by xiayuushi@qq.com xiayuushi@163.com, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FormView.vue')
    }
  ]
})

export default router
