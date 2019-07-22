<template>
 <div class=''>
  <!--  <van-nav-bar
        title="德国彩票"
    />
    -->


<router-view></router-view>


   <van-tabbar
  v-model="active"
  active-color="#933"
  inactive-color="#000"
   :fixed="true"
>
  <van-tabbar-item icon="home-o" to="/home">彩票大厅</van-tabbar-item>
  <van-tabbar-item icon="balance-o" to="/result">开奖结果</van-tabbar-item>
  <van-tabbar-item icon="chat-o" to="/service">客服</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
    components: {},
    data() {
       
        return {
        title:'德国彩票',
         active:0
        };
    },
    methods: {
      
    }
}
</script>
<style  scoped>
    /* .van-nav-bar{
        height: 45px;
        line-height: 45px;
        background: #933
        
    }
.van-nav-bar__title{
    font-size:18px;
    color: #ffffff
    
} */

.van-tabbar{
    height: 50px;
  
    /* size: 30px */
}

van-icon {

    font-size: 30px;
}
van-tabbar-item{
font-size:60px
}
</style>