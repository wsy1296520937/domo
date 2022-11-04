<template>
  <div class="test">
	<slot></slot>
    <!-- 
      凡是没有放到具名插槽中内容：都放在这里
      默认位置
     -->
	<slot class="foot"></slot>
	<slot class="head"></slot>

  
  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>     