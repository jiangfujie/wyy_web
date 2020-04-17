
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Axios.defaults.baseURL='http://127.0.0.1:9090';
Axios.withCredentials=true;
Vue.prototype.$axios=Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
