<template>
<div class=''>
    <van-nav-bar
            title="安全中心"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
   

    <ul class="ullist">
        <li>
            <span>登录密码</span>
            <van-icon name="arrow" />
        </li>
        <li>
            <span>资金密码</span>
            <van-icon name="arrow" />
        </li>
        <li>
            <span>银行卡管理</span>
            <van-icon name="arrow" />
        </li>
        
    </ul>
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

.ullist li{
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #f4f4f4
}
.ullist li span {
    font-size: 16px;
    float: left;
}
.van-icon-arrow {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    float: right;
    
}
</style>