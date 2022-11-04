<template lang="">
  <div>
    <h1>hello world</h1>
    <h2>{{1+1}}</h2>
    <h2>{{ 1 === 2 ? "等" : "不等" }}</h2>
    <h2>{{ test }}</h2>
    <h2>{{ foo() }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "option 中的test属性",
    };
  },
  methods: {
    foo() {
      return "foo run";
    },
  },
};
</script>

<style lang=""></style>
