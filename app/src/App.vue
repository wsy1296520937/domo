<template>
  <div>
    app...
    <test>
      <h1>slot插槽</h1>
      <div>哈哈哈</div>

      <!-- 
        v-slot 只能在template上使用
        v-slot:name 作用：将template中内容，放到具名slot中

        元素结构顺序：与插槽顺序有关
       -->

      <template v-slot:head>
        <div>
          head
        </div>
      </template>

      <template v-slot:foot>
        <div>
          footer
        </div>
      </template>
    </test>
  </div>
</template>

<script>
import Test from './Text.vue'
export default {
  components:{
    Test
  }
}
</script>

<style>

</style>