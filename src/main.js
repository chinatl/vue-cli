import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
//导入状态管理工具
import store from './store'
// 导入reset.css
// import './../statics/css/reset.css'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
