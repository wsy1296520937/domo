<template>
    <div>
        <button @click="++count">++count</button>
        <h1>{{count}}</h1>
        <h1>{{cc}}</h1>
        <input type="text" v-model="todo" @keydown.enter="add">
        <ul>
            <li v-for="item in todoList" :key="item">{{item.content}}
                <button @click="item.status = !item.status">更新</button>
            </li>
        </ul>
        <h1>
            总任务：{{total}}
            代办：{{a}}
            已经完成：{{b}}
        </h1>
    </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
export default {
  data() {
    return {
      count: 0,
      cc:"",
      todo:'',
      todoList:[],//渲染列表
      total:0,
      a:0,
      b:0
    };
  },
  /*
   * watch 监听属性 赋值对象
   * key：必须是响应式数据 例如data
   */
  watch: {
    // 监听count
    count:{
        // 当count发生变化时候，hander就会执行
        handler:function(res,old){
            console.log('count change');
            console.log(res,old);
            this.cc = res*2
        }
    },

    // 当监听是基本类型数据，可以简写
    // count(res,old){
    //     // res 变化后的最新值
    //     // old 变化前的值
    // }

    /* 
    * deep：false 默认可以监听到数组长度变化，不能监听到数组中对象变化 
    */
    todoList:{
        // 深度监听，数组或者对象发生变化时候触发handlerl函数
        deep:true,
        handler(to,from){
            // 在vue3 中 代理对象用于
            console.log('执行');
            console.log(to,from);

            this.total = to.length;
            this.a = to.filter(item => !item.status).length;
            this.b = this.total - this.a
        }
    }
  },
  methods:{
    add(){
        let obj = {
            content:this.todo,
            status:false, // false 代办理 true完成
        }
        // this.todoList.push(obj)
        // this.todoList.unshift(obj)
        this.todoList=[...this.todoList,obj]
        // 清空input
        this.todo = ""
    }
  }
};
</script>

<style>
</style>
 