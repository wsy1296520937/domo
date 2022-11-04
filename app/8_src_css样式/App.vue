<template>
  <div>
    <div>
      <div :class="box"></div>
        <hiddle/>
    </div>
  </div>
</template>

<script>

import Hiddle from './Hiddle.vue'

export default {
    // components 注册局部组件
    components:{
        Hiddle,
    },
  data() {
    return {
      // box:'box red'

      /**
       * class 动态添加
       * 1：对象：对象key为类名，value为true 添加类名false不添加类名
       * 2：字符串，类名之间有空格
       */
      box: {
        box: true,
        red: true,
        size: true,
      },
    };
  },
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
}
.red {
  background-color: red;
}
.size {
  margin-left: 200px;
}
</style>
