<template>
<div class='bigbox'>
     <van-nav-bar
        title="提现记录"
        left-arrow
        @click-left="onClickLeft"
    />
    <ul class="top">
        <li>
            提现时间
        </li>
        <li>
            提现金额
        </li>
        <li>
            状态
        </li>
        <li>
            详情
        </li>
    </ul>
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item title="2019-07-23" name="1">
                    <p>订单编号：3406141427596423713</p>
                    <span>提现方式：支付宝</span>
                    <span>提现金额：100</span>
                    
                </van-collapse-item>
                <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                <van-collapse-item title="标题3" name="3">内容</van-collapse-item>  
            </van-collapse>




            <div class="footer">
                <div>
                     <span>总计(笔)</span>
                     <b>2</b>
                </div>
                <div>
                     <span>总金额</span>
                     <b>2</b>
                </div>
                <div>
                     <span>提现成功</span>
                     <b>2</b>
                </div>
               
            </div>

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
     onClickLeft() {
            this.$router.go(-1)
        }
},
created() {

},
mounted() {

},
beforeCreate() {}, 
beforeMount() {},
beforeUpdate() {},
updated() {},
beforeDestroy(){},
destroyed(){},
activated(){},
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
.bigbox >>>.van-tabs--line .van-tabs__wrap {
    height: 40PX;
}
.bigbox >>>.van-ellipsis{
    height: 40PX;
    line-height: 40px
}

.bigbox >>>.van-collapse-item__content p{
    margin-left: 20px;
    margin-bottom: 10px
}

.bigbox >>>.van-cell{
    height: 45px;
    background: #fff
}
.bigbox >>>.van-cell__title{
line-height: 45px;
}
.bigbox >>>.van-cell__right-icon{
    font-size: 16px;
    line-height: 45px
}
.bigbox >>>.van-collapse-item__content span{
    width: 40vw;
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 10px
}
.bigbox >>>.van-collapse-item__content{
background: #f4f4f4
}
.footer{
    height: 50px;
    display: flex;
    justify-content: space-between;
   
    position: fixed;
    bottom: 0;
    left: 0;
    border-top:1px solid #f4f4f4
}
.footer div{
    width: 33.3vw;
    
}
.footer div span{
    display: block;
    text-align: center;
    margin-top: 10px
}
.footer div b{
    display: block;
    text-align: center;
    color: #933

}
</style>