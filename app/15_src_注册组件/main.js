import { createApp } from "vue";
import App from './App.vue'
import Alert from './components/Alert.vue'
import Message from './components/Message.vue'

import Fluent from './components'

let vm = createApp(App)
/**
 * vm.component()
 * 作用：注册全局组件
 * 参一：组件名 string
 * 参二：但文件组件
 * 
 * 注意：必须写在 确认根标签 之前，否则无效注册。
 */
vm.component('FlAlert',Alert)
vm.component('FlMessage',Message)
/**
 * vm.use()
 * 作用：将vue插件挂载到vue实例对象上
 * 参数：回调函数。自动执行
 * 回参：vm实例对象
 */
vm.use(Fluent)
vm.mount('#app')