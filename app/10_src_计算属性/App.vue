<template>
  <div>
    <!-- 
        页面的渲染次数，与使用data中内内容没有关系

     -->
    <h1>{{count}}</h1>
    <h1>{{count}}</h1>
    <h1>{{count}}</h1>
    <h1>{{count}}</h1>

    <h1>{{foo()}}</h1>
    <h1>{{foo()}}</h1>
    <h1>{{foo()}}</h1>

    <h1>{{ _count }}</h1>
    <h1>{{ _count }}</h1>
    <h1>{{ _count }}</h1>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:1
        }
    },
    methods:{
        foo(){
            console.log('foo run');
            return this.count+1
        }
    },
    /* 
    * computed 计算属性 
    * 赋值：对象
    * 对象key：作用：保存getter函数执行时候的返回值
    *   value：是getter函数(有return 返回值的函数为getter函数)
    *   getter函数的执行条件：
    *       1：使用计算机属性时候，(多次使用执行一次)
    *       2：当依赖的data中状态发生变化，函数执行
    * 注意：key不是函数。
    */
    computed:{
        _count:function(){
            console.log('co run');
            return this.count + 2 + 'computed -----------'
        },
        count_:{
            get(){
                return this.count + '计算属性全写'
            },
            set(){
                
            }
        }
    },

    created(){
        setTimeout(()=>{
            this.count = 4 ;
        },3000)
    }

    /* 
    * 计算属性与methods的区别是什么？
    * 
    */
}
</script>

<style>

</style>