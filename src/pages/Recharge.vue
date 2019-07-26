<template>
<div class=''>
     <van-nav-bar
        title="充值"
        left-arrow
        @click-left="onClickLeft"
    />

     <span>充值金额</span>
    <div class="box">
        <b>￥</b><input type="text" placeholder="请输入金额">
    </div>
   
  <span>充值方式</span>
   <!-- <div class="box">
       <i><img src="../assets/zhifubao.png"></i>
    </div> -->
   
<van-radio-group v-model="radio">
 <img src="../assets/zhifubao.png"> <van-radio name="1" checked-color="#07c160"></van-radio>
  <van-radio name="2" checked-color="#07c160">单选框 2</van-radio>
</van-radio-group>


</div>
</template>

<script>
export default {
components: {},
data() {
return {
radio:'1'
};
},
computed: {},
watch: {},
methods: {
    onClickLeft() {
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
span{
    display: block;
    margin: 20px 10px
}
.box{
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 10px
}
input{
    border: none;
    
}
.box b{
    font-size: 26px;
    margin-right: 20px;
    color:#933
}
.van-radio-group img{
display: inline-block;

}
.van-radio{
    display: inline-table;
    width: 50vw;
    font-size: 16px
}
</style>