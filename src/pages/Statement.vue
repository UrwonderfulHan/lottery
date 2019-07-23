<template>
<div class=''>
    <van-nav-bar
        title="报表管理"
        left-arrow
        @click-left="onClickLeft"
    />

<ul class="statement_list">
    <router-link to="personaloverview">
        <li>
            <van-icon name="user-circle-o" />
            <span>个人总览</span>
        </li>
    </router-link>

    <router-link to="personalstatements">
        <li>
            <van-icon name="cashier-o" />
            <span>个人报表</span>
        </li>
    </router-link>

    <li>
        <van-icon name="records" />
        <span>投注记录</span>
    </li>
    <li>
        <van-icon name="after-sale" />
        <span>充值记录</span>
    </li>
    <li>
        <van-icon  name="cash-back-record" />
        <span>提现记录</span>
    </li>
</ul>

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
.statement_list{
box-sizing: border-box
}
.statement_list li{
width: 33vw;
float: left;
border-right:1px solid #ccc ;
border-bottom:1px solid #ccc 
}
.statement_list span{
    display: block;
    text-align: center;
    margin: 10px 0
}
.statement_list .van-icon{
    display: block;
    text-align: center;
    font-size: 30px;
    margin-top: 30px;
    color: #933
}
.statement_list li:nth-child(3n+3) {
border-right: none
}

</style>