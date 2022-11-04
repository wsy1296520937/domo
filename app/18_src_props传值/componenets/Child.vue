<template>
  <div>
	child
	<h1>如何使用父组件App.vue中msg:{{Msg}}</h1>
  </div>
</template>

<script>
export default {
	/**
	 * props 作用：接收使用组件时，自定属性Msg的赋值
	 */
	// props:['Msg']
	props:{
		Msg:{
			type:String,
			default:''
		},
		list:{
			type:Array,
			default(){
				return["设置list prop 的默认值"]
			}
		},
		obj:{
			type:Object,
			default(){
				return{
					a:"设置 obj prop的默认值"
				}
			}
		}
	}
}
</script>

<style>

</style>