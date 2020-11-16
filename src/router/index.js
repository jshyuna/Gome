import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../components/Home.vue"
import Cart from "../components/Cart.vue"
import Mall from "../components/Mall.vue"
import Me from "../components/Me.vue"
import Message from "../components/Message.vue"
<<<<<<< HEAD
import Register from "../components/Register.vue"
=======
>>>>>>> 3f01950716fb72e67ffc3661c29dbc74335653e8


const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path:'/cart',
    component:Cart
<<<<<<< HEAD
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
  // {
  //   path:'https://m.gome.com.cn/store.html'
  // }
=======
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
  }
>>>>>>> 3f01950716fb72e67ffc3661c29dbc74335653e8
]

const router = new VueRouter({
  routes
})

export default router
