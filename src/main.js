import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/js/rem'
import fastClick from 'fastclick'
import { Field,Cell, CellGroup } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Field).use(Cell).use(CellGroup);
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
