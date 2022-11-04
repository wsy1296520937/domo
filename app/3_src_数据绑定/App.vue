<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 
        v-bind:属性="option api"
        :属性="option api"
        v-bind 作用：vue中数据绑定，，标签中属性实现数据单向绑定

        数据驱动视图：
            当 v-bind 绑定的数据发生变化时，vue会更新视图，从而实现数据变化视图变化的效果 
     -->
    <h2 :class="cname"></h2>
    <h2 v-bind:class="cname"></h2>

    <!-- 
        v-model 数据双向绑定
        只能用于表单标签
        当input的value 发生变化，修改ipt的值
        当ipt的赋值发生变化时，修改页面渲染
     -->
    <input type="text" v-model="ipt" />
    <h2>{{ ipt }}</h2>
    <button @click="handle">修改ipt</button>
  </div>
</template>

<script>
export default {
  data() {
    // 响应式数据
    return {
      msg: "123",
      cname: "a b",
      ipt: "",
    };
  },
  methods: {
    handle() {
      console.log("click run");
      this.ipt = '更改ipt'
    },
  },
};

/**
 * 数据绑定：
 * 1：文本绑定---{{}}
 * 2：html属性动态绑定  v-bind 单向绑定，数据驱动视图
 * 3：form绑定 v-model 数据双向绑定
 */
</script>

<style></style>
