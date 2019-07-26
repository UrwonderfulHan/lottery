<template>
<div class=''>
   

    <div class="head">
        <div class="img_pic">
            <img src="../assets/hear_pic.png" />
            <div class="head_text">
                <p>昵称 ~</p>
                <span>ID:5699</span>
            </div>
            
        </div>
        <div class="balance">
            <span>余额：2658</span>
        </div>
    </div>


    <div class="box">
        
       
            <div class="chongzhi">
                 <router-link to="recharge">
                    <img src="../assets/chongzhi.png"/>
                    <span>充值</span>
                 </router-link>
            </div>
       

      <div class="tixian">
            <img src="../assets/tixian.png"/>
            <span>提现</span>
        </div>
    </div>

    <div class="main">
        <router-link to="personaldata">
            <div class="main_list">
                <div><img src="../assets/geren.png"></div> 
                <div><span>个人资料</span></div>
            </div>
        </router-link>

        <div class="teshu"></div>

        <router-link to="statement">
            <div class="main_list">
                <div><img src="../assets/baobiao.png"></div> 
                <div><span>报表管理</span></div>
            </div>
        </router-link>

        <router-link to="agency">
            <div class="main_list">
                <div><img src="../assets/daili.png"></div> 
                <div><span>代理中心</span></div>
            </div>
        </router-link>

        <router-link to="safety">
            <div class="main_list">
                <div><img src="../assets/anquan.png"></div> 
                <div><span>安全中心</span></div>
            </div>
        </router-link>

        <div class="main_list">
            <div><img src="../assets/qingli.png"></div> 
            <div><span>清理缓存</span></div>
        </div>
    </div>

           <div class="tuichu">
               <span>退出登录</span>
           </div>
          
           
 

</div>
</template>

<script>
export default {
components: {},
data() {
return {

};
}
}
</script>
<style  scoped>
    .head{
        height: 25vh;
        background: #933;
    }
    .img_pic{
        width: 60vw;
        float: left;
    }
    .img_pic img{
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 30px 10px 0 20px
    }
    .head_text{
        float: left;
        color: #ffffff;
        margin-top: 40px;
    }
    .head_text p{
        font-size: 16px
    }
    .head_text span{
        height: 30px;
        line-height: 30px
    }
    .balance{
        float: right;
    }
    .balance span{
        display: block;
        height: 40px;
        padding: 0 20px;
        margin-top: 40px;
        line-height: 40PX;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background: #ffffff;
    } 
    .box{
        height: 100px;
        width: 90vw;
        margin: auto;
        margin-top: -50px;
        border-radius: 10px;
        box-shadow: 0 0 5px #888888;
        background:#fff;
    }
    
    .chongzhi{
    width: 25vw;
    float: left;
    }
    .chongzhi img{
        width: 40px;
        vertical-align:middle;
        display: inline-block;
        /* margin: 40px 10px 0 20px */
    }
    .chongzhi{
         padding: 35px
    }
   

    .tixian{
    width: 20vw;
    padding: 35px;
    float: left
    }
    .tixian img{
        width: 40px;
        vertical-align:middle;
        display: inline-block;
        /* margin: 40px 10px 0 20px */
    }
    .main_list{
        margin: 20px 20px
    }
   .main_list div{
       display: inline-block;
       vertical-align: middle
   }
    .main_list div img{
        height: 30px;
        width: 30px;
    }
    .main_list span{
        font-size: 18px;
        margin-left: 20px
    }
   .tuichu{
      background: #f4f4f4;padding: 25px 0 ;
   } 
   .tuichu span{
       display: block;
       background: #fff;
       height: 50px;
       line-height: 50px;
       text-align: center;
       font-size: 18px;
   }
   .teshu{
       height: 10px;
       background: #f4f4f4
   }
</style>