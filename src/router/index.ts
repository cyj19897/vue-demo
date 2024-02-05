import { createRouter, createWebHistory } from 'vue-router';


const  routes=[
  {
      path:'/',
      component: () => import('../components/index.vue')
  },
  {
    path:'/test',
    component: () => import('../views/test.vue')
},
{
  // 因为主应用为history路由，appname-vite子应用是hash路由，这里配置略微不同
  // 已解决带参数时页面丢失的问题
  path: '/app-vite:page*',
  name: 'vite',
  component: () => import('../views/vite.vue'),
},
]
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:routes
});
