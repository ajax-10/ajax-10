// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1.0 导入外部仓库
import store from '@/store/myStore.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store // 2.0 全局注册 vuex 仓库(store)，以后再任意vue文件，都可以使用仓库(store)中的数据了
})
