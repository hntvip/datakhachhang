import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DanhSachDonHang from './views/DanhSachDonHang.vue'
import DonHang from './views/DonHang.vue'
import UpdateDonHang from './views/UpdateDonHang.vue'
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
      path: '/don-hang',
      name: 'don-hang',
      component: DanhSachDonHang
    },
    {
      path: '/update-don-hang',
      name: 'update-don-hang',
      component: UpdateDonHang
    }
  ]
})
