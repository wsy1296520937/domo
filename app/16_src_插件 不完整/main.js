import { createApp } from "vue";
import App from './App.vue'

let vm = createApp(App)

/**
 * vm.config.globalProperties 作用：获取/设置 vm实例上全局原型属性
 */
vm.config.globalProperties.$pang = function(){
	console.log('hi pang pang');
}

/**
 * vue插件：是开发者的第三方库，在vue内容api基础上，提供一些全局的自定义的api
 * 			让开发者在vue项目中使用。
 * 
 * 如何在vue项目中使用插件
 * 1：导入插件
 * 2：.use() 挂载插件
 * 
 * vue的插件本质是什么？
 * 	就是定义的install函数
 */

/**
 * .use()
 * 作用：函数：叫install函数，自执行
 * 		对象：要求对象中必须有insatll属性赋值 函数
 * 回参：vm实例对象（vue创建的实例对象）
 * 注意：.use必须在mount()
 */

vm.mount('#app')