import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userInfoReg from '../views/userInfoReg'
import accessRecords from '../views/accessRecords'
import passphrase from '../views/passphrase'
import passRecords from '../views/passRecords'
import userInfo from '../views/userInfo'
import messageList from '../views/messageList'
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
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: userInfo
  },
  {
    path: '/messageList',
    name: 'messageList',
    component: messageList
  }
]

const router = new VueRouter({
  routes
})

export default router
