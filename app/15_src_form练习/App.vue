<template>
  <div>
    <form>
        <div class="form-control">
            <label>用户名：</label>
            <input type="text" v-model="forData.user" @change="validateUser">
            <!-- <span :class="{success:isSuccess}">{{userMsg}}</span> -->
            <span ref="pang">{{userMsg}}</span>
        </div>
        <div class="form-control">
            <label>密码：</label>
            <input type="text" v-model="forData.psd" @change="validatepsd">
            <span ref="pangg">{{psdMsg}}</span>
        </div>
        <div class="form-control">
            <label>密码：</label>
            <input type="text">
        </div>
        <div class="form-control">
            <label>爱好：</label>
            <input type="checkbox">
            <label>篮球</label>
            <input type="checkbox">
            <label>足球</label>
            <input type="checkbox">
            <label>网球</label>
        </div>
        <div class="form-control">
            <label>性别：</label>
            <input type="radio">女
            <input type="radio">男
        </div>

        <div>
            <label>是否同意本协议：</label>
            <input type="checkbox">
        </div>

        <div class="form-control">
            <button>提交表单</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            forData:{
                user:'',//记录用户录入的用户名
                psd:'',
                likes:[],

            },
            userMsg:'', // 用户名的提示信息
            isSuccess:false,
            psdMsg:'',//密码
        }
    },
    methods:{
        validateUser(){
            let reg = /\w{6,8}/
            let user = this.forData.user;
            if(!reg.test(user)){
                this.userMsg = "请输入6-8位的数字"
            }else{
                this.userMsg = '验证通过',
                // this.isSuccess = true,
                this.$refs['pang'].style.color = 'green'
            }
        },
        validatepsd(){
            let regs = /\w{6,8}/
            let psd = this.forData.psd;
            if(!regs.test(psd)){
                this.psdMsg = "请输入6-8位的数字"
            }else{
                this.psdMsg = '密码错误',
                // this.isSuccess = true,
                this.$refs['pangg'].style.color = 'red'
            }
        }
    }
}
</script>
<style>
.success{
    color: green;
}
</style>