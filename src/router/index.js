import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import Admin from '@/pages/Admin/admin.vue'
import Login from '@/pages/Login/login.vue'
import Map from '@/pages/Map/map.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }, {
    path: '/map',
    name: 'Map',
    component: Map
  }]
})
