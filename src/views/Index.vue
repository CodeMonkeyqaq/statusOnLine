<template>
<div class="outer">
    <div class="container" id="vibrant">
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <h3 class="text-decoration">小粥在线古董网站</h3>
            </div>
            <div class="col-sm-12 col-md-12">
                <div class="gradiant1 box"></div>
                <div class="gradiant2 box"></div>
                <div class="gradiant3 box"></div>
                <div class="gradiant4 box"></div>
                <div class="gradiant5 box"></div>
                <div class="gradiant6 box"></div>
                <div class="gradiant7 box"></div>
                <div class="gradiant8 box"></div>
                <div class="gradiant9 box"></div>
                <div class="gradiant10 box"></div>
            </div>
        </div>
    </div>
    <router-link :to="{name:'Home'}"><div class="btn">立即进入</div></router-link>
</div>
</template>
<style scoped>
.outer{
    background-color: rgb(52, 53, 54);
    height:100vh;
}
.box {
    height: 360px;
    width: 9%;
    float: left;
    margin-left: 1%;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 4px;
}
.text-decoration {
    text-align: center;
    font-size: xx-large;
    color: #dadada;
    letter-spacing: 9px;
    font-family: monospace;
    padding-top: 10px;
}
.gradiant1 {
    animation: arrow 2s infinite alternate;
    animation-delay: .5s;
    background-image: linear-gradient(to bottom, #f8e739, #f1d42d, #eac222, #e1b019, #d89e10);
}
.gradiant2 {
    animation: arrow 2s infinite alternate;;
    animation-delay: .6s;
    background-image: linear-gradient(to bottom, #d89e10, #e28f00, #ec7f00, #f66b00, #ff5200);
}
.gradiant3 {
    animation: arrow 2s infinite alternate;
    animation-delay: .7s;
    background-image: linear-gradient(to bottom, #ff5200, #f84603, #f13806, #e92909, #e2130b);
}
.gradiant4 {
    animation: arrow 2s infinite alternate;
    animation-delay: .8s;
    background-image: linear-gradient(to bottom, #e2130b, #e1110c, #e00f0d, #df0c0d, #de090e);
}
.gradiant5 {
    animation: arrow 2s infinite alternate;
    animation-delay: .9s;
    background-image: linear-gradient(to bottom, #de090e, #df002a, #dc003e, #d60051, #ce0061);
}
.gradiant6 {
    animation: arrow 2s infinite alternate;
    animation-delay: 1s;
    background-image: linear-gradient(to bottom, #ce0061, #d50079, #d60094, #d000b3, #c115d4);
}
.gradiant7 {
    animation: arrow 2s infinite alternate;
    animation-delay: 1.1s;
    background-image: linear-gradient(to bottom, #c115d4, #af0cd6, #9b07d8, #8508da, #6a0ddc);
}
.gradiant8 {
    animation: arrow 2s infinite alternate;
    animation-delay: 1.2s;
    background-image: linear-gradient(to bottom, #6a0ddc, #5f0ddd, #530edd, #450fde, #3210de);
}
.gradiant9 {
    animation: arrow 2s infinite alternate;
    animation-delay: 1.3s;
    background-image: linear-gradient(to bottom, #3210de, #2a1cdc, #2124d9, #172ad7, #0c2fd4);
}
.gradiant10 {
    animation: arrow 2s infinite alternate;
    animation-delay: 1.4s;
    background-image: linear-gradient(to bottom, #0c2fd4, #0045d8, #0056d9, #0065d8, #1b73d5);
}
@keyframes arrow {
    to{
        height: 160px;
    }
}

.btn{
    position: relative;
    width: 250px;
    height: 60px;
    background: #4c84ff;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;
    color: white;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    margin-top: 540px;
    margin-left: auto;
    margin-right: auto;
}
</style>
<script>
export default {
    name:"Index"
}
</script>