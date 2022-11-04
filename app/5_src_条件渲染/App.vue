<template>
  <div>
    <!-- 
        v-show 控制元素的显示隐藏  true 显示
     -->
    <h1 v-show="false">哈哈哈哈哈哈哈哈哈</h1>

    <!-- 
        v-if="boolean"
        作用：创建或者销毁dom
        true 创建dom
        false 销毁dom 用注释标签占位
     -->
    <h1 v-if="true">哈哈哈哈哈哈哈哈哈</h1>

    <h1>条件渲染模板，以下只能渲染一个</h1>
    <h1 v-if="isToken">你登录了</h1>
    <h1 v-else>你没登录</h1>

    <div>
      <h2>多个条件渲染</h2>
      <h3 v-if="istask === 'zs'">我是zs</h3>
      <h3 v-else-if="istask === 'zs1'">我是zs1</h3>
      <h3 v-else-if="istask === 'zs2'">我是zs2</h3>
      <h3 v-else>我是zs3</h3>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * data
   * 1:作用：创建响应式状态
   * 2：第一种赋值对象。对象中所有的key都是响应式
   *    第二种写法赋值对象，return对象，对象中key是响应式
   * 区别：
   *      由于vue是组件化开发，每个组件中都有data 在源码中，为了变量污染，所以利用闭包data为函数的方式，防止变量污染
   */

  data() {
    return {
      msg: "hello world",
      isToken: true,
      istask: "z1",
    };
  },

  /**
   * methods 赋值对象
   * 作用：自定义函数
   * 注意：这里的函数只能通过【组件实例对象】this获取
   * 注意：所有的key只能是函数
   */
  methods: {
    foo() {},
  },
};
</script>

<style></style>
