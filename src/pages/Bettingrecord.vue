<template>
<div class='bigbox'>
    <van-nav-bar
            title="投注记录"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />
    <van-tabs v-model="active">

        <van-tab title="全部">
            <!-- 全部内容 -->
            <ul class="top">
            <li>
                彩种
            </li>
            <li>
                投注金额
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
                <p>注册编码：3406141427596423713</p>
                <span>操作：不可撤单</span>
                <span>期号：20190614017</span>
                <span>时间：2019-07-24</span>
                <span>游戏玩法：定位胆</span>
                <p>开奖号码：5，2，8，10，6，7，9，1，3，4</p>
                <span>投注金额：150</span>
                <span>状态：<b>未中奖</b></span>
                <span>中奖金额：0</span>
                <span>投注内容：09</span>
                <span>注单详情：<router-link to="bettingdetails"><i>查看</i></router-link></span>
            </van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        
</van-collapse>


        </van-tab>

        <van-tab title="未中奖">
            <!-- 未中奖内容 -->
             <ul class="top">
                <li>
                    彩种
                </li>
                <li>
                    投注金额
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
                    <p>注册编码：3406141427596423713</p>
                    <span>操作：不可撤单</span>
                    <span>期号：20190614017</span>
                    <span>时间：2019-07-24</span>
                    <span>游戏玩法：定位胆</span>
                    <p>开奖号码：5，2，8，10，6，7，9，1，3，4</p>
                    <span>投注金额：150</span>
                    <span>状态：<b>未中奖</b></span>
                    <span>中奖金额：0</span>
                    <span>投注内容：09</span>
                    <span>注单详情：<router-link to="bettingdetails"><i>查看</i></router-link></span>

                </van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
            
</van-collapse>

        </van-tab>


        <van-tab title="未开奖">
            <!-- 未开奖内容 -->
             <ul class="top">
                <li>
                    彩种
                </li>
                <li>
                    投注金额
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
                    <p>注册编码：3406141427596423713</p>
                    <span>操作：不可撤单</span>
                    <span>期号：20190614017</span>
                    <span>时间：2019-07-24</span>
                    <span>游戏玩法：定位胆</span>
                    <p>开奖号码：5，2，8，10，6，7，9，1，3，4</p>
                    <span>投注金额：150</span>
                    <span>状态：<b>未中奖</b></span>
                    <span>中奖金额：0</span>
                    <span>投注内容：09</span>
                    <span>注单详情：<router-link to="bettingdetails"><i>查看</i></router-link></span>
                </van-collapse-item>
                <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                <van-collapse-item title="标题3" name="3">内容</van-collapse-item>  
            </van-collapse>

        </van-tab>

        <van-tab title="已开奖">
            <!-- 已开奖内容 -->

            <ul class="top">
                <li>
                    彩种
                </li>
                <li>
                    投注金额
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
                    <p>注册编码：3406141427596423713</p>
                    <span>操作：不可撤单</span>
                    <span>期号：20190614017</span>
                    <span>时间：2019-07-24</span>
                    <span>游戏玩法：定位胆</span>
                    <p>开奖号码：5，2，8，10，6，7，9，1，3，4</p>
                    <span>投注金额：150</span>
                    <span>状态：<b>未中奖</b></span>
                    <span>中奖金额：0</span>
                    <span>投注内容：09</span>
                    <span>注单详情：<router-link to="bettingdetails"><i>查看</i></router-link></span>
                </van-collapse-item>
                <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                <van-collapse-item title="标题3" name="3">内容</van-collapse-item>  
            </van-collapse>

        </van-tab>
    </van-tabs>



</div>
</template>

<script>
export default {
components: {},
data() {
return {
     active: 0,
      activeName: '0'
};
},
computed: {},
watch: {},
methods: {
    onClickLeft(){
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
<style scoped >
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
.bigbox >>>.van-tabs--line .van-tabs__wrap {
    height: 40PX;
}
.bigbox >>>.van-ellipsis{
    height: 40PX;
    line-height: 40px
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
.bigbox >>>.van-collapse-item__content p{
    margin-left: 20px;
    margin-bottom: 10px
}
.bigbox >>>.van-collapse-item__content b{
    color:#ffcc33;
}
.bigbox >>>.van-collapse-item__content i{
    display: inline-block;
    font-style: normal;
    background: #3c3;
    color: #fff;
    padding: 3px 20px;
    border-radius: 10%
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

/* .list li{
    float: left;
    width: 35vw;
    margin: 0px 20px;
} */
.bigbox >>>.van-collapse-item__content span{
    width: 40vw;
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 10px
}
.bigbox >>>.van-collapse-item__content{
background: #f4f4f4
}
</style>