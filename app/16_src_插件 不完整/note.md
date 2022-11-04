# vue插件

## vue插件是什么

>vue插件:是开发者开发的第三方库,在vue内容api基础之上,提供一些全局的自定义的api.让开发者在vue项目中使用.

## 为什么要写插件

>插件可以提取公共api,减少代码冗余。同时在组件中使用方便


## 如何创建vue的全局属性

~~~
vm.config.globalProperties.$pang = function(){
    console.log('hi pang pang');
}
~~~

## 如何创建插件

> 插件就是将一些有关联的全局属性整理为一个库

- 1：创建`.js` 并导出install
- 2: 在install函数中，接受 vue实例对象
- 3：使用vue实例对象挂在全局属性或者api

使用插件：
- 1:导入插件
- 2：`.use()` 挂在插件
- 3：在`.vue`中通过`this.api`获取插件中所有全局属性


code:
~~~js
// plugin/index.js
export default {
    install(app){
        app.config.globalProperties.$msg = '通过插件方式添加全局属性,或者全局api'
    }
}
~~~
~~~js
// main.js
import MyPlut from './plugin'
vm.use(MyPlut)
~~~


**总结：如何使用.use和原型属性，来创建插件**