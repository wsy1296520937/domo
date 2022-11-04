<template>
  <div>
    app...
    <Child :Msg="msg" :list="['修改默认值']" :obj="{a:'abc'}" />
  </div>
</template>

<script>
import Child from './componenets/Child.vue'
export default {
    components: { 
      Child
    },
    data(){
      return{
        msg:"hellow App"
      }
    }
}
</script>

<style>

</style>