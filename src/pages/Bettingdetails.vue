<template>
<div class='box'>
     <van-nav-bar
            title="注单详情"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
    <div class="details">
        投注时间 <span>2019-07-23 14:26:10</span>
    </div>
    <div class="details">
        投注单号 <span>60705235464164864135145</span>
    </div>
    <div class="details">
        投注金额 <span>￥2元</span>
    </div>
    <div class="details">
        派送奖金 <span>￥0元</span>
    </div>

<div class="touzhu">
    <span>我的投注</span>
    <div class="tz_pic">
        <img src="../assets/touzhu.png" alt="">
        <span>定位胆十位：2</span>
    </div>
</div>
    

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
.box{
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    position: fixed;
}
.van-nav-bar{
    height: 45px;
    line-height: 45px;
    background: #933;  
}
.van-nav-bar__title{
    font-size:18px;
    color: #ffffff   
}
.van-nav-bar .van-icon{
    font-size: 20px;
    color: #fff;
}

.details{
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding-left: 10px;
    border-bottom:1px solid #f4f4f4;
    background: #fff 
}
.details span{
    margin-left: 20px
}
.touzhu{
    background: #f3f3f3;
    padding-top:30px; 
    
}
.touzhu span{
   margin-left:10px; 
  font-size: 16px
}
.tz_pic{
    width: 100vw;
   position: relative;
  
}
.tz_pic img{
    width: 100%
  
}
.tz_pic span{
    position: absolute;
    top: 60px;
    left: 30px;
    color: #ccc
}
</style>