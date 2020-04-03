import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import Admin from '@/pages/Admin/admin.vue'
import Login from '@/pages/Login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
