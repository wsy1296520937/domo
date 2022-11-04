<template>
  <div>
    app
    <fl-child />
    <h2>App中使用全局组件</h2>
    <fl-button />
    <fl-message />
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  /**
   * components 作用：注册局部组件
   * key：组件名
   * value 组件
   */
  components:{
    // 'FlChild':Child
    [Child.name]:Child,
  }
}
</script>

<style>

</style>