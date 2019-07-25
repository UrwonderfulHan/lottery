<template>
<div class=''>
     <van-nav-bar
            title="代理说明"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
    />

    <div class="main">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Enim blanditiis modi sequi corrupti laudantium impedit esse sapiente voluptatibus dolor deserunt.
              Tempore consequatur voluptate sequi pariatur dolorum cum vero tempora! Pariatur.</p>
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
.van-nav-bar .van-icon{
    font-size: 20px;
    color: #fff;
}
.main p{
  text-indent:50px;
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px
  }
</style>