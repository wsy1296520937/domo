<template>
  <div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            ipt:"",
            test:'12345'
        }
    },
    beforeCreate(){
        console.log("before");
        setTimeout(()=>{
                        
        })
    },
    created(){
        console.log("created");

    },
    mounted(){
        console.log("mounted");

    },
    //以上为初始化钩子
    beforeUpdate() {
        console.log("before Update");
        
    },
    updated() {
        console.log("updated");
        
    },
    //以上为更新钩子

    // 以下为销毁钩子
    beforeDestroy() {
        console.log("before Destroy");
        
    },
    destroyed() {
        console.log("destroyed");
        
    },

}
</script>

<style>

</style>