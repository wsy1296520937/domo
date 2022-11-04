<template>
  <div>
    <button @click="handle">点击事件</button>
    <!-- 
      $event:是实例上内置属性， 作用：保存事件对象
     -->
    <h1 v-for="item in list" :key="item" @click="tabs(item, $event)">
      {{ item }}
    </h1>

    <!-- 修饰符：就是一些特定的触发事件处理函数的条件。
        @事件名.修饰符="事件函数"

        .self 作用：当触发事件与绑定事件元素为统一个的时候，才触发事件处理函数
    -->
    <div class="box" @click.self="onClick">
      <!-- .stop 阻止事件冒泡 -->
    <button @click.stop="btnClick">子元素测试事件冒泡</button>
    <button @click="btnClick">子元素测试事件冒泡</button>
    <!-- .prevent 作用：阻止浏览器默认行为。 -->
    <form action="" @submit.prevent="onsub">
      <input type="text" name="" id="" @keydown.enter="sure">
      <input type="text">
      <button>提交</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["123", "456", "789"],
    };
  },
  methods: {
    handle(e) {
      console.log("事件绑定------------>", e);
    },
    tabs(data,e) {
      console.log("tabs run", data,e);
    },
    onClick(){
      console.log("onClick run")
    },
    btnClick(){
      console.log("btnClick run");
    },
    onsub(){
      console.log("submit run");
    },
    sure(){
      console.log("sure run");
    }
  },
};
</script>

<style>
.box{
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
