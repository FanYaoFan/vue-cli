import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import Menu from '@/components/Menu.vue'
import Admin from '@/components/Admin.vue'
import About from '@/components/About/About.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'

// 二级路由的引入
import Contact from '@/components/About/Contact.vue'
import Dilibrary from '@/components/About/Dilibrary.vue'
import Order from '@/components/About/Order.vue'
import history from '@/components/About/History.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home', components: {default : Home}},
    { path: '/menu', name : 'Menu', component : Menu},
    { path: '/admin', name : 'Admin', component : Admin },
    { path: '/about', name : 'About', component : About ,
     children : [
       {path: '/contact', name : 'contact', component : Contact},
       {path: '/dilibrary', name : 'Dilibrary', component : Dilibrary},
       {path: '/order', name : 'Order', component : Order},
       {path: '/history', name : 'history', component : history},
     ] },
    { path: '/login', name : 'Login', component :Login },
    { path: '/register', name : 'Register', component :Register },
    { path: '*', redirect : '/'},
  ]
})
