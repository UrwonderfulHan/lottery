<template>
<div class=''>
    <van-nav-bar
            title="代理中心"
            left-arrow
            @click-left="onClickLeft"
    />
    <img src="../assets/agency_pic.png" alt="">
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
.van-nav-bar__arrow{
    font-size: 20px;
    color: #fff;
}

</style>