<template>
<div class=''>
    <van-nav-bar
            title="个人总览"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
    <div class="xiangaing">
        <i class="red"></i>
        <h3>个人详情</h3>
    </div>

    <ul class="ullist">
        <li>
            <b>￥233.73</b>
            <p>余额</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>充值</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>提现</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>投注金额</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>中奖金额</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>打和返款</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>投注返点</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>代理返点</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>优惠</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>活动奖励</p>
        </li>
        <li>
            <b>￥233.73</b>
            <p>净盈利</p>
        </li>
        <li>
            
        </li>
        <div style="clear:both;"></div>
    </ul>

    <div class="jisuan">
        <p>
            净盈利=中奖金额+打和返款+投注返点+代理返点+活动奖励+优惠-投注金额
        </p>
    </div>
    
</div>
</template>

<script>
export default {
data() {
return {

};
},
methods: {
     onClickLeft(){
        this.$router.go(-1)
    }
},
mounted() {

}
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
.red{
    width: 10px;
    height: 10px;
    background: #933;
    border-radius: 50%;
    display: inline-block;
}
h3{
    display: inline;
    font-size: 16px;
    margin-left: 10px
}
.xiangaing{
    height: 40px;
    line-height: 40px;
      margin-left: 20px
}

.ullist li{
    width: 33vw;
    float: left;
    border-top:1px solid #f4f4f4; 
    border-right:1px solid #f4f4f4; 
}
.ullist li b{
    display: block;
   text-align: center;
   color: #f96;
   font-size: 14px;
   margin-top:30px; 
}
.ullist li p{
    font-size: 16px;
   text-align: center;
   margin: 5px 0 20px 0;
}
.ullist li:nth-child(3n+3) {
border-right: none
}
.jisuan{
    width: 85vw;
    margin: auto;
    background: #ffc;
    border: 0.5px solid #f96;
    padding: 10px;
    margin-top: 20px;
    font-size: 14px;
    color: #f96
}

</style>