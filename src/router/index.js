import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../components/Home.vue"
import Cart from "../components/Cart.vue"
import Mall from "../components/Mall.vue"
import Me from "../components/Me.vue"
import Message from "../components/Message.vue"
import Register from "../components/Register.vue"
import Class from "../components/Class.vue"
import Detail from "../components/Detail.vue"
import Login from "../components/Login.vue"
import Search from "../components/Search.vue"



const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/mall',
    component:Mall
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/message',
    component:Message
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/class',
    component:Class
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/search',
    component:Search
  }
]

const router = new VueRouter({
  routes
})

export default router
