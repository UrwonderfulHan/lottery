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
      <!-- <ul class="list">
          <li>充值：0</li>
          <li>提款：0</li>
          <li>彩票投注：0</li>
          <li>彩票中奖：0</li>
          <li>投注返点：0</li>
          <li>代理返点：0</li>
          <li>活动奖金：0</li>
          <li>彩票盈亏：0</li>
      </ul> -->
      <span>充值：0</span>
      <span>充值：0</span>
      <span>充值：0</span><span>充值：0</span>
      <span>充值：0</span>
      <span>充值：0</span>
      <span>充值：0</span>
<!--       
          提款：0
          彩票投注：0
          彩票中奖：0
          投注返点：0
          代理返点：0
          活动奖金：0
          彩票盈亏：0 -->
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
</van-collapse>

    



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

.list li{
    float: left;
    width: 35vw;
    margin: 0px 20px;
}
/* .van-collapse-item__wrapper{
     background: #f4f4f4 
}
.van-collapse-item__content{
    line-height: 0;
} */
.van-collapse-item__content span{
    width: 40vw;
    display: inline-block;
}
</style>