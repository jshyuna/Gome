import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../components/Home.vue"
// import Cart from "../components/Cart.vue"
// import Mall from "../components/Mall.vue"
// import Me from "../components/Me.vue"
// import Message from "../components/Message.vue"


const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path:'/',
    component:Home
  },
  // {
  //   path:'/mall',
  //   component:Mall
  // },
  // {
  //   path:'/me',
  //   component:me
  // },
  // {
  //   path:'message',
  //   component:Message
  // }
]

const router = new VueRouter({
  routes
})

export default router
