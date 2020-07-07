<template>
    <div class="container">
        <Header></Header>
        <div class="title">{{title}}</div>
    <div class="model">
        <Show3dModel :gltfName="gltf" :width="width" :height="height" :bg="bg"></Show3dModel>
    </div>
    <div class="description">{{description}}</div>
    </div>
</template>


<style scoped>
    .container{
        background-image: url(../assets/bg.jpg);
        height: 150vh;
    }
    .model{
        margin-top:20px;
    }
    .title{
        font-size: 50px;
        text-align: center;
        color: #fafafa;
        /* letter-spacing: 0; */
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
    }
    .description{
        font-size: 20px;
        width: 70%;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        margin-top:20px;
    }
</style>



<script>
import Show3dModel from '../components/Show3d'
import Header from "../components/Header"
import status_list from "../util/utils"
export default {
    name: "StatusDetail",
    data(){
        return{
            gltf: "",
            width:1080,
            height:600,
            bg: "rgb(0,0,0)",
            status_list:[]
        }
    },
    components:{
        Show3dModel,
        Header
    },
    created(){
        this.status_list = status_list
    },
    mounted(){
        var id = this.$route.params.id
        this.gltf = status_list[id].gltf
        this.title = status_list[id].name
        this.description =  status_list[id].description
    },
    methods:{
        
    }
}
</script>