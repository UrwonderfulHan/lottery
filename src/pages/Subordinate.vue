<template>
<div class='box'>
    <van-nav-bar
            title="下级开户"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
    <ul class="ullist"> 
        <li>
            用户类型
            <select>
                <option>代理</option>
                <option>会员</option>
            </select>
        </li>
        <li>用户昵称<input type="text" placeholder="请输入昵称"></li>
         <li>用户名<input type="text" placeholder="请输入用户名"></li>
          <li>登录密码<input type="text" placeholder="请设置登录密码"></li>
           <li>重复密码<input type="text" placeholder="请重复登录密码"></li>
           <li>请为下级设置返点</li>
           <li>德国时时彩<input type="text" placeholder="请输入0~9"></li>
           <li>德国十分彩<input type="text" placeholder="请输入0~9"></li>
           <li>德国五分彩<input type="text" placeholder="请输入0~9"></li>
           <li>幸运飞艇<input type="text" placeholder="请输入0~9"></li>
           
    </ul>

   <van-button type="danger">确认开户</van-button>

   
</div>
</template>

<script>
export default {
  
components: {},
data() {
return {
  
};
},
computed: {},
watch: {},
methods: {
      onClickLeft(){
        this.$router.go(-1)
    }
},
created() {

},
mounted() {

},
beforeCreate() {}, 
beforeMount() {},
beforeUpdate() {},
updated() {},
beforeDestroy(){},
destroyed(){},
activated(){},
}
</script>
<style  scoped>
.van-nav-bar{
    height: 45px;
    line-height: 45px;
    background: #933;  
}
.van-nav-bar__title{
    font-size:18px;
    color: #ffffff   
}
.van-nav-bar__arrow{
    font-size: 20px;
    color: #fff;
}
select{
    border:none
}
.ullist li{
    height: 45px;
    border-bottom: 1px solid #f4f4f4;
    line-height: 45px;
    margin-left: 10px
}
input{
    border: 0;
    margin-right:40vw; 
    float: right
    
}
.box>>> .van-button--danger{
    width: 80vw;
    margin-left: 10vw;
    height: 40px;
    background: #933;
    border-radius: 5px;
    margin-top: 30px
}
</style>