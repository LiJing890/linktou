// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './store/index'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/css/metisMenu.min.css'
import './assets/js/metisMenu.min'

Vue.use(VueResource);

Vue.config.productionTip = false


/* eslint-disable no-new */
const app = new Vue({
  store,
  ...App
})

app.$mount('#app')