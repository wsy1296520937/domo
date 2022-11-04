import { createApp } from 'vue'
import App from './App.vue'


createApp()
// vue 会根据你传入的选择器，选中一个标签作为vue的根模板
.mount('#app')
/**
 * mount() 
 * 1：实例对象上的api
 * 2：作用：指定vue的根模板
 * 为什么要指定vue的根模板呢？？？
 * 	为了通过编写vue语法，也能完成页面的交互
 */