# vue组件通信
- 关系型：父子 子孙
- 非关系型：路由组件之间

## 关系型

### propx
- 1：定义组件时候，使用props属性，自定义传值api
- 2：使用组件 通过 自定义属性`prop` 并动态绑定方式，传递数据。

#### code
~~~vue
<template>
  <div>
	child
	<h1>如何使用父组件App.vue中msg:{{Msg}}</h1>
  </div>
</template>

<script>
export default {
	props:['Msg']
}
</script>
~~~


### $emit

### mixin

### provite/inhect

## 非关系型

### bus事件总线

### 

### vuex