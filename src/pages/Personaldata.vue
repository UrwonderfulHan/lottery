<template>
    <div class=''>
        <van-nav-bar
        title="个人资料"
        left-arrow
        @click-left="onClickLeft"
        />

    <div class="datalist">
        <span>头像</span>
        <van-icon name="arrow" />
        <i> <img src="../assets/hear_pic.png"/></i> 
    </div>
    <div class="datalist">
        <span>昵称</span>
        <van-icon name="arrow" />
        <i> 可爱多</i> 
    </div>
    <div class="datalist">
        <span>支付宝账号</span>
        <van-icon name="arrow" />
        <i> 13922223333</i> 
    </div>
    <div class="datalist">
        <span>微信号</span>
        <van-icon name="arrow" />
        <i> 13922223333</i> 
    </div>
    <div class="datalist">
        <span>银行卡号</span>
        <van-icon name="arrow" />
        <i>6641222556666</i> 
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
        onClickLeft() {
            this.$router.go(-1)
        }
    },
    computed: {}

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
.datalist{
    height: 40px;
    padding: 10px 0;
    margin: 0 20px;
    border-bottom: 1px solid #ccc
}
.datalist i img{
    width: 40px;
    height: 40px;
    float: right;
    border-radius: 50%
}
.datalist i {
    display: inline-block;
    float: right;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-style: normal;
    color: #666;
   
   
}
.datalist span{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    display: inline-block;
    float: left;
}
.van-icon-arrow{
    float: right;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #999;
    margin-left: 10px

}
</style>