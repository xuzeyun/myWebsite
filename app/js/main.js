import Vue from 'vue';
// 导入APP入口文件，再导入路由
import App from './App.vue';
import router from './router';//会自动的去找index.js 所以可以省略不写
require('swiper/dist/css/swiper.css');

// 声明当前不是生产环境
Vue.config.productionTip = false;

// 实例化组件 https://cn.vuejs.org/v2/guide/components.html
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});
