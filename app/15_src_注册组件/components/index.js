
console.log('component index run');

import Button from './Button.vue'


// vue2.x 全局注册组件的写法
// import vue from 'vue'
// Vue.Component('FlButton',Button)

export default function(app){
	app.component('FlButton',Button)
}