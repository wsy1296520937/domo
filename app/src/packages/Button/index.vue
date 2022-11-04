<template>
    <button :class="['fl-button',type?'fl-button-'+type:'']">
      <span>
        <!-- 
          solt 插槽 作用：相当于在组件中给预留一个位置
          在使用组件的时候可以填充，填充任意的内容
          默认名字：default
         -->
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
  name: "FlButton",
  props:{
    type:{
      type:String,
      default:''
    }
  },
  created(){
    // $slots 作用：获取所有插槽中内容
    console.log(this.$slots);
  }
}
</script>

<style>
.fl-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.fl-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.fl-button-error {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.fl-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

</style>