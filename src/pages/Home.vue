<template>
<div class=''>
   
    <van-nav-bar
        title="德国彩票"
        :border="false"
        :fixed="true"
    />


     <!-- banner -->
    <van-swipe :autoplay="3000" indicator-color="white" >
      <van-swipe-item><img src="../assets/banner1.png"></van-swipe-item>
      <van-swipe-item><img src="../assets/banner2.png"></van-swipe-item>
      <van-swipe-item><img src="../assets/banner1.png"></van-swipe-item>
      <van-swipe-item><img src="../assets/banner2.png"></van-swipe-item>
    </van-swipe>
   
     <!-- Notify 消息通知 -->
    <van-notice-bar 
      text="通知内容:德国时时彩，五分彩，十分彩，幸运飞艇上线了，现在开玩，免费送1000元！！！"
      left-icon="volume-o"
      
      :scrollable="true"
    />

    <!-- background="#fff"
      color="#333" -->

    <div class="main">
        <div class="box">
            <div class="box1">
                    <p>德国彩票</p>
                    <span>极简操作     &nbsp;&nbsp;    一站式资讯平台</span>
            </div>
            <div class="box2">
                <img src="../assets/haha.png" />
            </div>
            <div class="clear"></div>
        </div>

            <ul class="lottery_list">
                <li>
                    <img src="../assets/shishicai.png"/>
                    <span>德国时时彩</span>
                </li>
                <li>
                    <img src="../assets/shifencai.png"/>
                    <span>德国十分彩</span>
                </li>
                <li>
                    <img src="../assets/wufencai.png"/>
                    <span>德国五分彩</span>
                </li>
                <li>
                    <img src="../assets/xingyunfeiting.png"/>
                    <span>幸运飞艇</span>
                </li>
                <li>
                    <img src="../assets/caipiao5.png"/>
                    <span>竞足单关</span>
                </li>
                 <li>
                    <img src="../assets/caipiao6.png"/>
                    <span>竞彩篮球</span>
                </li>
                 <li>
                    <img src="../assets/caipiao7.png"/>
                    <span>足球单场</span>
                </li>
                 <li>
                    <img src="../assets/caipiao8.png"/>
                    <span>大乐透</span>
                </li>
                 <li>
                    <img src="../assets/caipiao9.png"/>
                    <span>更多彩种</span>
                </li>
                
            </ul>


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
methods: {

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
.van-swipe{
height: 150PX;
margin-top: 45px
}
.van-swipe img {
    height:100%;
    width: 100%
}
.van-notice-bar{
    height: 40px;   
}
.main{
    background: #F4F4F4;
    /* padding-top:10px; */
    /* margin-bottom:50px ; */
    padding-bottom: 10px     
}
.box{
   background: #fff;
  padding-bottom: 10px
}
.box1{
    float: left;
    width: 60vw;
    padding: 18px 0;
    padding-left: 20px;
}
.box1 p{
    font-size: 20px;
    height: 30px;
}
.box1 span{
    font-size: 14px;
    height: 30px;
    color: #ccc;  
}
.box2{
    float: left;
    width: 30vw;
}
.box2 img{
   width: 80%;
   height: 80%;
   margin-left: 30px;
   padding: 10px 0
}
.clear{
    clear: both;
}
.lottery_list{
      margin: 10px 0
}
.lottery_list li{
    float: left;
    width: 33vw;
   
}
.lottery_list li img{
    width: 100%;
    height: 100%;
    
}
.lottery_list span{
    display: block;
    text-align: center;
    height: 20px;
    line-height: 20px
}
</style>