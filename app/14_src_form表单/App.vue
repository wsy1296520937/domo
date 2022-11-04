<template>
  <div>
    <!-- 
        表单：
        value：表示用户录入的输入
     -->
    <span>单行文本输入：</span>
    <!-- 
        v-model 实时记录用户录入的内容。
        单行/多行文本
     -->
    <input type="checkbox" v-model="text" />
    <h1>{{ text }}</h1>
  </div>
  <div>
    <span>多行文本输入：</span>
    <textarea v-model="multext" id="" cols="30" rows="10"></textarea>
    <h2>{{ multext }}</h2>
  </div>
  <div>
    <span>一个复选框：</span>
    <input type="checkbox" v-model="isCheck" />
  </div>
  <!-- <div>
    <span>多选</span>
    <input type="text" id="jack" value="jack1" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="text" id="john" value="john1" v-model="checkedNames">
    <label for="john">John</label>
    <input type="text" id="mike" value="mike1" v-model="checkedNames">
    <label for="mike">Mike</label>
  </div> -->
  <div>
    <template v-for="item in names" :key="item">
      <input
        type="checkbox"
        :id="item.n"
        :value="item.v"
        v-model="checkedNames"
      />
      <label :for="item.n">{{ item.n }}</label>
    </template>
    <br />
    <span>Checked name:{{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: false,
      text: "",
      multext: "",
      names: [ //渲染多选列表
        { n: "Jack", v: "Jack1" },
        { n: "John", v: "John1" },
        { n: "Mike", v: "Mike1" },
      ],
      checkedNames: [], // 记录多选
      picked:"",
      selected:'',
    };
  },
  methods:{
    getFormData(){
      console.log('获取表单录入所有的数据');
    }
  }
};
</script>

<style></style>
