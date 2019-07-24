<template>
<div class=''>
     <van-nav-bar
            title="个人报表"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
    <ul class="top">
        <li>
            日期
        </li>
        <li>
            彩票投注
        </li>
        <li>
            彩票盈亏
        </li>
        <li>
            详情
        </li>
    </ul>

   <van-collapse v-model="activeName" accordion>
    <van-collapse-item title="2019-07-23" name="1">
        <span>充值：0</span>
        <span>提款：0</span>
        <span>彩票投注：0</span>
        <span>彩票中奖：0</span>
        <span>投注返点：0</span>
        <span>代理返点：0</span>
        <span>活动奖金：0</span>
        <span>彩票盈亏：0</span>

    </van-collapse-item>
    <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    
</van-collapse>




<div class="foot_zj">
    <span>总计</span>
    <b>550</b>
    <b>-132.79</b>
    <van-icon name="arrow" />
</div>
    



</div>
</template>

<script>
export default {
components: {},
data() {
return {
     activeName: '0'
};
},
computed: {},
watch: {},
methods: {
onClickLeft(){
        this.$router.go(-1)
    }
}
}
</script>
<style >
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
.top{
    height: 45px;
    line-height: 45px;
    background: #f4f4f4
}
.top li{
    float: left;
    width: 25vw;
    text-align: center
}

.van-cell{
    height: 45px;
    background: #fff
}
.van-cell__title{
line-height: 45px;
}
.van-cell__right-icon{
    font-size: 16px;
    line-height: 45px
}

/* .list li{
    float: left;
    width: 35vw;
    margin: 0px 20px;
} */
.van-collapse-item__content span{
    width: 40vw;
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 10px
}
.van-collapse-item__content{
background: #f4f4f4
}
.foot_zj{
    height: 45px;
    box-shadow: 0 0 3px #888888;
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100vw
}
.foot_zj span{
    width: 25vw;
    background: #933;
    height: 100%;
    display: inline-block;
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    line-height: 45px;
}
.foot_zj :nth-child(2){
    color:#933;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    width: 25vw;
}
.foot_zj :nth-child(3){
    color:#9c6;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    width: 25vw;
}
.van-icon-arrow{
    font-size: 16px;
    margin-left: 30px

}
</style>