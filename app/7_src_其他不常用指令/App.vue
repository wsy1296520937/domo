<template>
  <div>
    <!-- 
        v-html 作用：插入html片段
        原理用innerHTML实现的
        注意：插入的html不能再使用指令
     -->
    <div v-html="tmp"></div>
    <!-- 
        v-text 插入的是一段文本标签，不会将html模板转化为dom
     -->
    <div v-text="tmp"></div>
    <!-- 
        v-pre 不产生编译，告诉vue当前的标签中模板语法不进行编译处理
     -->
    <div v-pre>v-pre的编译效果{{ msg }}</div>

    <div>{{ test }}</div>
    <!-- 
        v-once 不响应变化，其绑定的元素，作用：只渲染一次，数据变化视图不变化
     -->
    <div v-once>{{ test }}</div>

    <!-- 
        vue 编译之前，有v-cloak
        编译之后，没了
    -->
    <div v-cloak>{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmp: `<h1>hello world</h1>`,
      msg: "fluent design",
      test: "测试v-once",
      text: "v-cloak",
    };
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
