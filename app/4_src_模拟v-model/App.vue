<template>
  <div>
    <!-- 
        @事件名="定义函数"

        v-bind + input事件 实现 v-model 双向绑定效果
        1：通过监听input事件，从而监听视图的变化
        2：在事件处理函数中，dom.value 获取变化值
        3：更改响应式数据
        4：本身 v-bind 就有数据驱动视图的效果
     -->
    <input type="text" :value="ipt" @input="onInput" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipt: "nnn"
    };
  },
  methods:{
    onInput(e){
        console.log("input run");
        console.log(e);

        let val = e.srcElement.value;
        this.ipt= val
    }
  }
};
</script>

<style></style>
