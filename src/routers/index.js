import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用懒加载路由
const home = () => import('views/home/home.vue')
const category = () => import('views/category/category.vue')
const profile = () => import('views/profile/profile.vue')
const shopcart = () => import('views/shopcart/shopcart.vue')
// 使用路由插件
Vue.use(VueRouter)

// 定义路由信息
const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: home
},
{
  path: '/category',
  component: category
},
{
  path: '/profile',
  component: profile
},
{
  path: '/shopcart',
  component: shopcart
}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
