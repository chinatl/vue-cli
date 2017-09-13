/*all app config router*/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/*封装一个快速导出路由的方法*/
import _import from './_import'
const router = [
	{path:'/',redirect: '/home'},
	{path:'/home',component:_import('home'),name:'home'},
]
export default new Router({
	routes: router
})
