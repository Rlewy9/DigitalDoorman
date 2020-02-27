import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userInfoReg from '../views/userInfoReg'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userInfoReg',
    name: 'userInfoReg',
    component: userInfoReg
  },
]

const router = new VueRouter({
  routes
})

export default router
