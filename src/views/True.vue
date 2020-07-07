<template>
    <div class="container">
        <Header></Header>
        <div class="model">
        <Show3dModel :gltfName="gltf" :width="width" :height="height" :bg="bg"></Show3dModel>
        </div>
        <div class="seq">
            第{{number}}题
        </div>
        <div class="quiz">
            <span class="question">{{quiz}}</span>
            <RadioGroup v-model="select" class="selectGroup">
                <Radio  label=1 style="margin-right:50px">真</Radio>
                <Radio  label=2 >假</Radio>
            </RadioGroup>
            <Button type="primary" @click="submit()" class="btn">确定</Button>
        </div>
        <div class="score">
            得分: {{score}}
        </div>
    </div>
</template>


<style scoped>
    .seq{
        font-size: 20px;
    }
    .container{
        background-image: url(../assets/bg.jpg);
        height: 100vh;
    }
    .model{
        margin-top:20px;
    }
    .quiz{
        margin-top:20px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    .question{
        text-align: center;
        font-size: 25px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .selectGroup{
        margin-top: 20px;
        display:block;
    }
    .btn{
        margin-top: 20px;
    }
    .score{
        margin-top: 40px;
        margin-left: 25%;
        float:left;
        color:red;
        font-size: 25px;
    }
</style>



<script>
import Show3dModel from '../components/Show3d'
import Header from "../components/Header"
import status_list from "../util/utils"
export default {
    name: "True",
    data(){
        return{
            gltf: "",
            width:700,
            height:400,
            bg: "rgb(0,0,0)",
            status_list:[],
            quiz:"",
            quizList:[],
            select:"1",
            number:1,
            score:0
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
        var ranArr = []
        for(var i=0;i<5;i++){
            ranArr = this.Ran(ranArr);
        }
        this.quizList = ranArr
        console.log(this.quizList)
        var id = this.quizList[0]
        this.gltf = status_list[id].gltf
        this.quiz = status_list[id].quiz
    },
    methods: {
        word: function(score){
            if(score==0){
                return "不要气馁，多多了解，您一定可以更加了解古董文化的！"
            }
            else if(score==20){
                return "您已经开始逐步了解古董文化了，继续加油哦！"
            }
            else if(score==40){
                return "您做的很棒啦，继续学习，您一定会爱上古董！"
            }
            else if(score==60){
                return "真棒！您就是深藏不露的古董大师吧！"
            }
            else if(score==80){
                return "您对古董的了解已经如臻化境，令我无比钦佩！"
            }
            else if(score==100){
                return "我对您的钦佩之情犹如滔滔江水绵延不绝，请受我一拜！"
            }
        },
        Ran: function(arr){
            do{
                var Random = Math.floor(Math.random()*11)
            }while(arr.indexOf(Random)!=-1)
            arr.push(Random)
            return arr
        },
        submit: function(){
            var _this = this
            var id = this.quizList[0]
            if(this.select == status_list[id].quiz_answer){
                this.score = this.score + 20
                this.$Modal.success({
                    title: '回答正确',
                    content: '你真棒！得分加20分'
                });
            }else{
                this.$Modal.error({
                    title: '回答错误',
                    content: '真可惜，继续加油!'
                });
            }
            this.quizList.shift()
            if(this.quizList.length==0){
                this.$Modal.info({
                    title: '答题结束',
                    content: '<p>您的得分为'+ this.score + '分!</p><p>' + this.word(this.score) + '</p><p>我们将送您回到主页，请继续欣赏美丽的古董哦！</p>',
                    onOk: function(){_this.$router.push({ path: '/home' })}
                });
                // this.$route.push({ path: '/home' })
            }
            else{
                var id = this.quizList[0]
                this.gltf = status_list[id].gltf
                this.quiz = status_list[id].quiz
                this.number = this.number + 1
                this.select = "1"
            }
        }
    },
}
</script>