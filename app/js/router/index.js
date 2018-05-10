import Vue from 'vue';
import Router from 'vue-router';
import Home from '../home/index.vue';
import '../../css/reset.scss';

// 设置路由
Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/',
			name:'home',
			component:Home,
		}
	]
});
