<template>
<div class=''>
    <van-nav-bar
            title="代理中心"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
    <img src="../assets/agency_pic.png" alt="">

    <ul class="ullist">
        <router-link to="agencyexplain">
            <li>
                <span>代理说明</span>
                <van-icon name="arrow" />
            </li>
        </router-link>

        <router-link to="agencyoverview">
            <li>
                <span>代理总览</span>
                <van-icon name="arrow" />
            </li>
        </router-link>

        <li>
            <span>团队报表</span>
            <van-icon name="arrow" />
        </li>

        <router-link to="subordinate">
        <li>
            <span>下级开户</span>
            <van-icon name="arrow" />
        </li>
        </router-link>

        <li>
            <span>用户列表</span>
            <van-icon name="arrow" />
        </li>
        <li>
            <span>投注明细</span>
            <van-icon name="arrow" />
        </li>
        <li>
            <span>交易明细</span>
            <van-icon name="arrow" />
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
methods:{
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
img{
    height: 25vh;
    width: 100vw
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