<template>
<div class=''>
     <van-nav-bar
        title="联系客服"
        :border="false"
        :fixed="true"
    />
    <div class="main">
        <div class="pic_box">
            <img src="../assets/kefupic.png"/>
        </div>

        <div class="lx_box">
            <p>联系客服</p>
            <span>QQ:5538888</span>
            <span>微信：15888686888</span>
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
.main{
    background: #f33;
    height: 90vh;
}
.pic_box{
    height: 45vh;
    margin-top: 45px
}
.pic_box img{
    height: 100%;
    width: 100%
}
.lx_box{
    height: 150px;
    width: 90vw;
    margin: auto;
    background: #fff;
    margin-top: 50px;
    border-radius: 8px
}
.lx_box p{
    height:60px;
    width: 90%;
    margin: auto;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    color: #f66;
    border-bottom: 1px solid #f66;
   
}
.lx_box span{
    font-size: 14px;
    margin-top: 30px;
    display: inline-block;
    margin-left: 40px
}
</style>