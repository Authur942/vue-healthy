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
  }, {
    path: '/map',
    name: 'Map',
    component: Map
  }]
})
// 全局路由守卫
// 所有的路由都会先走守卫
// 添加导航守卫之后，不管是访问哪个路由，都会执行这个回调函数中的代码
// 因为所有的路由，都会经过该导航守卫，所以就可以在这个导航守卫的回调函数中，判断有没有登录
// Router.beforeEach((to, from, next) => { // to去哪里  from从哪来 next放行
//   if (to.path === '/login') { // 如果访问的是login页面直接方行,不管有没有登录都可以访问login页面
//     next()// 调用next表示：访问什么页面就展示什么页面的内容
//   } else {
//     // 如果访问的不是login页面，先判断有没有登录，如果已经登录直接调用next()方法，如果没有跳转login页面
//     // 通过登录成功时候保存的token，来作为判断  有没有登录成功的条件
//     const token = localStorage.getItem('token')
//     if (token) {
//       // 有，登录成功
//       next()
//     } else {
//       // 没有，登录失败
//       next('/login')
//     }
//   }
// })
