import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import axios from 'axios';
import vueaxios from 'vue-axios'

 
Vue.config.productionTip = false
// Vue.prototype.$http = axios


new Vue({
  Header,
  router,
   axios,
  vueaxios,
   
   
  render: h => h(App)
}).$mount('#app')
