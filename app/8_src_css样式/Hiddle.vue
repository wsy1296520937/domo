<template>
  <div>
    <button @click="Click">显示隐藏取反</button>
    <div :class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box: {
        box: true,
        dis: true,
      },
    };
  },
  methods: {
    Click() {
        /**
         * this是组件实例对象
         * 有option api 可以获取vue实例对象的所有属性
         */
      this.box.dis = !this.box.dis;
    },
  },
};
</script>

<style>
.box {
  width: 200px;
  height: 20px;
  background-color: blue;
}
.dis {
  display: none;
}
</style>
