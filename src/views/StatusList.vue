<template>
    <div class="container">
        <Header></Header>
        <Layout style="width:100%; height:100%;">
                <Sider hide-trigger :style="{background: 'rgb(30,30,30)'} ">
                    <Menu active-name="0" theme="dark" width="auto" :style="{background: 'rgb(30,30,30)'}">
                            <MenuItem name="0" @click.native="click0()">全部</MenuItem>
                            <MenuItem name="1" @click.native="click1()">唐前</MenuItem>
                            <MenuItem name="2" @click.native="click2()">唐</MenuItem>
                            <MenuItem name="3" @click.native="click3()">宋</MenuItem>
                            <MenuItem name="4" @click.native="click4()">元</MenuItem>
                            <MenuItem name="5" @click.native="click5()">明</MenuItem>
                            <MenuItem name="6" @click.native="click6()">清</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: 'rgb(50,50,50)'}">
                        <div class="show" v-for="(id,i) in category_list" style="float:left;margin-right:150px;margin-bottom:50px;">
                            <router-link :to="{name:'StatusDetail',params:{id:id}}"><img :src="imgSrc(id)" height="120">
                            <p style="color:white;">{{status_list[id].name}}</p></router-link>
                        </div>
                    </Content>
                </Layout>
            </Layout>
    </div>
</template>


<style scoped>
    .container{
        background-image: url(../assets/bg.jpg);
        height: 112vh;
    }
</style>



<script>
import Header from "../components/Header"
import status_list from "../util/utils"
export default {
    name: "StatusList",
    data(){
        return{
            status_list:[],
            category_list:[0,1,2,3,4,5,6,7,8,9,10],
        }
    },
    created(){
        this.status_list = status_list
    },
    components:{
        Header
    },
    methods:{
        imgSrc: function(id){
            return require('../assets/' + status_list[id].img)
        },
        click0 : function(){
            var array = [0,1,2,3,4,5,6,7,8,9,10]
            this.category_list = array
        },
        click1 : function(){
            var array = []
            for(var i=0;i<status_list.length;i++){
                if(status_list[i].category==0){
                    array.push(status_list[i].id)
                }
            }
            this.category_list = array
        },
        click2 : function(){
            var array = []
            for(var i=0;i<status_list.length;i++){
                if(status_list[i].category==1){
                    array.push(status_list[i].id)
                }
            }
            this.category_list = array
        },
        click3 : function(){
            var array = []
            for(var i=0;i<status_list.length;i++){
                if(status_list[i].category==2){
                    array.push(status_list[i].id)
                }
            }
            this.category_list = array
        },
        click4 : function(){
            var array = []
            for(var i=0;i<status_list.length;i++){
                if(status_list[i].category==3){
                    array.push(status_list[i].id)
                }
            }
            this.category_list = array
        },
        click5 : function(){
            var array = []
            for(var i=0;i<status_list.length;i++){
                if(status_list[i].category==4){
                    array.push(status_list[i].id)
                }
            }
            this.category_list = array
        },
        click6 : function(){
            var array = []
            for(var i=0;i<status_list.length;i++){
                if(status_list[i].category==5){
                    array.push(status_list[i].id)
                }
            }
            this.category_list = array
        }
    }
}
</script>