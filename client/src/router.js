import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DanhSachDonHang from './views/DanhSachDonHang.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/list-don-hang',
      name: 'khachhang',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DanhSachDonHang
    }
  ]
})
