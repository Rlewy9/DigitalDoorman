import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userInfoReg from '../views/userInfoReg'
import accessRecords from '../views/accessRecords'
Vue.use(VueRouter)
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/userInfoReg',
    name: 'userInfoReg',
    component: userInfoReg
  },
  {
    path: '/accessRecords',
    name: 'accessRecords',
    component: accessRecords
  }
]

const router = new VueRouter({
  routes
})

export default router
