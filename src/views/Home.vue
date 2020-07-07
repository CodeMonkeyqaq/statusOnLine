<template>
    <div class="container">
        <Header></Header>
        <swiper :options="swiperOption" class="swiper-container">
        　　<swiper-slide><router-link :to="{name:'StatusDetail',params:{id:0}}"><img src="../assets/show0.png" height="500"></router-link></swiper-slide>
        　　<swiper-slide><router-link :to="{name:'StatusDetail',params:{id:3}}"><img src="../assets/show3.png" height="500"></router-link></swiper-slide>
            <swiper-slide><router-link :to="{name:'StatusDetail',params:{id:5}}"><img src="../assets/show5.png" height="500"></router-link></swiper-slide>
        　　<div class="swiper-pagination" slot="pagination" ></div>
        　　<div class="swiper-button-prev" slot="button-prev"></div>
        　　<div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div>
            <h1 style="margin-top:20px; padding-right:20%;">在线领略古董的魅力</h1>
            <h1 style="margin-top:20px;padding-left:20%;">感受中国文化的博大精深</h1>
        </div>
    </div>
</template>


<style scoped>
    .container{
        background-image: url(../assets/bg.jpg);
        height: 100vh;
    }
    .swiper-container{
        width:1080px;
        height:500px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 20px;
    }
    .swiper-button-prev{
        color:white;
    }
    .swiper-button-next{
        color:white;
    }
    h1{
        color: #fafafa;
        letter-spacing: 0;
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
    }
</style>
<script>
import Header from "../components/Header"
export default {
    name: "Home",
    data(){
        return{
            swiperOption: {
            　　pagination: {
            　　　　el: '.swiper-pagination',
            　　　　clickable: true // 允许点击小圆点跳转
            　　},
            　　autoplay: {
            　　　　delay: 3000,
            　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
            　　},
            　　loop: true,
            　　navigation: {
            　　　　nextEl: '.swiper-button-next',
            　　　　prevEl: '.swiper-button-prev'
            　　}
            },
        }
    },
    components:{
        Header
    }
}
</script>