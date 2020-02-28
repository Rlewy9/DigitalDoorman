import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userInfoReg from '../views/userInfoReg'
import accessRecords from '../views/accessRecords'
import passphrase from '../views/passphrase'
import passRecords from '../views/passRecords'
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
  {
    path: '/accessRecords',
    name: 'accessRecords',
    component: accessRecords
  },
  {
    path: '/passphrase',
    name: 'passphrase',
    component: passphrase
  },
  {
    path: '/passRecords',
    name: 'passRecords',
    component: passRecords
  }
]

const router = new VueRouter({
  routes
})

export default router
